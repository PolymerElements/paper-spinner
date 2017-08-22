import '../polymer/polymer.js';
import '../paper-styles/color.js';
import { PaperSpinnerBehavior } from './paper-spinner-behavior.js';
import './paper-spinner-styles.js';
import { Polymer } from '../polymer/lib/legacy/polymer-fn.js';
const $_documentContainer = document.createElement('div');
$_documentContainer.setAttribute('style', 'display: none;');

$_documentContainer.innerHTML = `<dom-module id="paper-spinner-lite">
  <template strip-whitespace="">
    <style include="paper-spinner-styles"></style>

    <div id="spinnerContainer" class-name="[[__computeContainerClasses(active, __coolingDown)]]" on-animationend="__reset" on-webkit-animation-end="__reset">
      <div class="spinner-layer">
        <div class="circle-clipper left"></div>
        <div class="circle-clipper right"></div>
      </div>
    </div>
  </template>

  
</dom-module>`;

document.head.appendChild($_documentContainer);
Polymer({
  is: 'paper-spinner-lite',

  behaviors: [
    PaperSpinnerBehavior
  ]
});
