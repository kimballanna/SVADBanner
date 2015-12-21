/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3795, function(sym, e) {
         
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play(1700);
         

      });
      //Edge binding end

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${Rectangle2}", "click", function(sym, e) {
         // insert code for mouse click here
         // Navigate to a new URL in a new window
         // (replace "_blank" with appropriate target attribute)
         window.open("http://svad.ucf.edu", "_blank");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle2}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         // Set a toggle to hide or show an element 
         if (sym.$("ApplyCopy3").is(":visible")) {
         	sym.$("ApplyCopy3").hide();
         } else {
         	sym.$("ApplyCopy3").show();
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle2}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse is moved off the object
         // Set a toggle to hide or show an element 
         if (sym.$("ApplyCopy3").is(":visible")) {
         	sym.$("ApplyCopy3").hide();
         } else {
         	sym.$("ApplyCopy3").show();
         }
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         // Hide an element 
         sym.$("ApplyCopy3").hide();

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-102534779");