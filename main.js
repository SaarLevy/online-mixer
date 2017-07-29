'use strict'

let buttons = [
    {
        name: 'Bassdrum',
        audio:'bassdrum.wav',
    },
    {
        name: 'Clap',
        audio: 'clap.wav',
    },
    {
        name: 'Closed HiHat',
        audio: 'closed-hihat.wav'
    },
    {
        name: 'Open HiHat',
        audio: 'open-hihat.wav'
    },
    {
        name: 'Cowbell',
        audio: 'cowbell.wav'
    },
    {
        name: 'Crash',
        audio: 'crash.wav'
    },
    {
        name: 'Ride',
        audio: 'ride.wav'
    },
    {
        name: 'Snare',
        audio: 'snare.wav'
    }
]

$(document).ready(() => {
    buttons.forEach((button) => {
        $('#sounds').append(
            `
            <button class="audio-button">
                <audio src='./sounds/${button.audio}'></audio>
                ${button.name}
            </button>
            `
        )
    });
    $('button').on('click', (e) => {
        // Getting audio src and playing through js audio is faster than playing html5 audio
        const audioSrc = $(e.currentTarget).find('audio').attr('src')
        const audio = new Audio(audioSrc);
        audio.play();
    });
});
