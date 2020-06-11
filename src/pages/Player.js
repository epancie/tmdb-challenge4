// @todo - solved: import MediaPlayer from SDK
import {Lightning, Utils, MediaPlayer} from "wpe-lightning-sdk";

export default class Player extends Lightning.Component {
    static _template() {
        return {
                MediaPlayer: {
                  zIndex:1,
                  type: MediaPlayer,
                },

                Controls: {
                  y:900,
                  zIndex:5,
                  ControlsOverlay:{
                    h:180, w:1920, rect:true, colorBottom: 0xff000000, colorTop: 0x00000000,
                  },
                  ImgPlayPause:{
                    x:60, y:60, h:60, w:60,
                    src: Utils.asset("mediaplayer/pause.png"),
                  },
                  ImgSkip:{
                    x:150, y:60, h:60, w:60,
                    src: Utils.asset("mediaplayer/skip.png"),
                  },
                  ProgressBar:{
                    x:400, y:90, h:10, w:1400,
                    rect:true, color: 0xff777777,
                  },
                  ProgressBarFill:{
                    x:400, y:90, h:10, w:900,
                    rect:true, color: 0xffDDDDDD,
                  },
                  CurrentTimeLabel:{
                    x:300, y:65,
                    color: 0xffFFFFFF,
                    text: {text: "67:35", fontSize: 40, fontFace: "SourceSansPro-Regular"}
                  },
                  TotalTimeLabel:{
                    x:1810, y:65,
                    color: 0xffFFFFFF,
                    text: {text: "94:22", fontSize: 40, fontFace: "SourceSansPro-Regular"}
                  },

                 },
            /**
             * @DONE:
             * - DONE || Add MediaPlayer component (that you've imported via SDK)
             * - DONE || Add a rectangle overlay with gradient color to the bottom of the screen
             * - DONE Add A Controls:{} Wrapper that hosts the following components:
             *   -DONE  PlayPause button image (see static/mediaplayer folder)
             *   - DONE A skip button (see static/mediaplayer folder)
             *   -DONE  Progress bar (2 rectangles?)
             *   - DONE add duration label
             *   - DONE add text label for currentTime
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
         play(Utils.asset("mediaplayer/video.mp4"), true);
    }
    /**
     *@todo:
     * add focus and unfocus handlers
     * focus => show controls
     * unfocus => hide controls
     */
     _focus(){
       this.controlsShowing = true;
       this.patch({
           Controls: {
               smooth: {alpha:1, duration:0.2,}
           }
       });
     }

     _unfocus() {
        console.log("EL PLAYER NOOOOOOOO TIENE EL FOCO");
     }

     _handleUp (){
       this.controlsShowing = true;
       this.patch({
           Controls: {
               smooth: {alpha:1, duration:0.2,}
           }
       });
     }

     _handleDown(){
       this.controlsShowing = false;
       this.patch({
           Controls: {
               smooth: {alpha:0, duration:0.2,}
           }
       });
     }

    /**
     * @todo:
     * When your App is in Main state, call this method
     * and play the video loop (also looped)
     * @param src
     * @param loop
     */
    play(src, loop) {
      this.tag('MediaPlayer').open(src);
      this.tag('MediaPlayer').loop = true;
    }

    stop() {

    }

    set item(v){
        this._item = v;
        console.log("EL ITEM BRO: " + v);
    }

    /**
     * @todo:
     * - add _handleEnter() method and make sure the video Pauses
     */
    _handleEnter(){

    }

    _inactive(){
      this.application.emit("ShowItemBackground");
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
