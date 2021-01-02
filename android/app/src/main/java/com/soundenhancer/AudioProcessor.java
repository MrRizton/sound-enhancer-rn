package com.soundenhancer;

import android.content.ContentResolver;
import android.media.MediaExtractor;
import android.media.MediaFormat;
import android.net.Uri;
import android.os.Build;
import android.os.ParcelFileDescriptor;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.io.File;
import java.io.IOException;
import java.nio.ByteBuffer;


public class AudioProcessor extends ReactContextBaseJavaModule {
    private static ReactApplicationContext reactContext;

    AudioProcessor(ReactApplicationContext context) {
        super(context);
        reactContext = context;
    }

    @Override
    public String getName() {
        return "AudioProcessor";
    }

    @ReactMethod
    public void processAudio(String uri, Callback onSuccess, Callback onError) throws IOException {
        MediaExtractor extractor = getAudioTrack(uri);
        int numTracks = extractor.getTrackCount();
        System.out.println(numTracks);
        if (numTracks != 1) {
            onError.invoke();
            return;
        }
        MediaFormat format = extractor.getTrackFormat(0);
        System.out.println(format.getInteger(format.KEY_SAMPLE_RATE));
        int bitsPerSample = format.getInteger("bits-per-sample");
        System.out.println(bitsPerSample);
        extractor.selectTrack(0);


        ByteBuffer inputBuffer = ByteBuffer.allocate(bitsPerSample);

        while (extractor.readSampleData(inputBuffer, 0) >= 0) {
            long size = extractor.getSampleSize();
            int trackIndex = extractor.getSampleTrackIndex();
            long time = extractor.getSampleTime();
            System.out.println("index: " + trackIndex + ", size: " + size + ", time: " + time);
            extractor.advance();
        }

        extractor.release();
        extractor = null;
    }

    public MediaExtractor getAudioTrack(@NonNull String uri) throws IOException {
        ContentResolver contentResolver = reactContext.getContentResolver();
        Uri contentUri = Uri.parse(uri);
        ParcelFileDescriptor file = contentResolver.openFileDescriptor(contentUri, "r");
        MediaExtractor extractor = new MediaExtractor();
        extractor.setDataSource(file.getFileDescriptor());
        return extractor;
    }
}