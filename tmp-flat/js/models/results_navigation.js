define(["underscore","backbone"],function(e,t){var n=t.Model.extend({defaults:{startIndex:1},initialize:function(){this.on("change:items",this.setDisplayHelpers,this)},setDisplayHelpers:function(){var t=this.get("itemsPerPage"),n=this.get("startIndex")-1,r=n+t,i=this.get("totalItems");n=n>0?n:1,this.set("totalItems",e(i).formatNumberWithComma()),this.set({start:n,end:r})},getNextIndex:function(){return this.get("startIndex")+this.get("itemsPerPage")},getPrevIndex:function(){return this.get("startIndex")-this.get("itemsPerPage")}});return n});