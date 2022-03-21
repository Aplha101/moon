function togglePlay(file_src){
    return file_src.paused ? file_src.play() : file_src.pause();
}