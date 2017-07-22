console.log($('button'));

$('button').click((e) => {
    // Getting audio src and playing through js audio is faster than playing html5 audio
    const audioSrc = $('#'+e.currentTarget.id).find('audio').attr('src');
    const audio = new Audio(audioSrc);
    audio.play();
});
