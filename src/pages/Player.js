// @todo - solved: import MediaPlayer from SDK
import {Lightning, Utils, MediaPlayer} from "wpe-lightning-sdk";

export default class Player extends Lightning.Component {
    static _template() {
        return {
                MediaPlayer: {
                  type: MediaPlayer,
                },
                Rectangle: {
                  w: 1920, h: 1080, rect: true
                }
                Controls: {
                  /*
                   x: 99,
                   y: 890,
                   type: PlayerControls, // some custom class for Player Controls
                   Progress: {
                     x: 99,
                     y: 970,
                     type: PlayerProgress, // some custom class for Player Progress bar
                   },
                   */
                 },
            /**
             * @todo:
             * - Add MediaPlayer component (that you've imported via SDK)
             * - Add a rectangle overlay with gradient color to the bottom of the screen
             * - Add A Controls:{} Wrapper that hosts the following components:
             *   - PlayPause button image (see static/mediaplayer folder)
             *   - A skip button (see static/mediaplayer folder)
             *   - Progress bar (2 rectangles?)
             *   - add duration label
             *   - add text label for currentTime
             */
        };
    }

    _init() {
        /**
         * @todo - solved:
         * tag MediaPlayer component and set correct consumer
         */
         console.log("Player Init 1");
         this.tag('MediaPlayer').updateSettings({consumer: this});
         //this.tag('MediaPlayer').open('video.mp4');
         this.tag('MediaPlayer').open(Utils.asset("mediaplayer/video.mp4"));
    }
    /**
     *@todo:
     * add focus and unfocus handlers
     * focus => show controls
     * unfocus => hide controls
     */


    /**
     * @todo:
     * When your App is in Main state, call this method
     * and play the video loop (also looped)
     * @param src
     * @param loop
     */
    play(src, loop) {

    }

    stop() {

    }

    set item(v){
        this._item = v;
    }

    /**
     * @todo:
     * - add _handleEnter() method and make sure the video Pauses
     */
    _handleEnter(){

    }

    /**
     * This will be automatically called when the mediaplayer pause event is triggerd
     * @todo:
     * - Add this Component in a Paused state
     */
    $mediaplayerPause() {

    }


    static _states(){
        return [
            /**
             * @todo:
             * - Add paused state
             * - on enter change the play to pause button (see static/mediaplayer folder)
             * - on _handleEnter() play the asset again
             * - reset state on play
             */
            class Paused extends this{
                $enter(){
                    this.tag("PlayPause").src = Utils.asset("mediaplayer/play.png");
                }
                _handleEnter(){
                    this.tag("MediaPlayer").doPlay();
                }
            }
        ]
    }
}
