# React Memory Game

## Summary

This application functions as a fairly simple memory game and was built using React.js. To win, the user must click all 12 of the flags on the page without clicking any single flag more than one time. If they do, they lose the round and must start over.

## How It Works

The application maps over a json file containing different flag images and renders each to the screen. Each image listens for click events.

The application also keeps track of the user's score. The user's score is incremented when clicking an image for the first time. However, if the user clicks the same image twice, the user's score is reset to 0.

To make things even more difficult on the user, the images rendered to the page shuffle themselves in a random order each time one is clicked.

Finally, once the user's score is reset after an incorrect guess, the game restarts.

## Deployed Application