define(["underscore","backbone"],function(t,e){var i=e.Model.extend({defaults:{id:null,type:"videos",maxResults:null},initialize:function(){this.on("change:id",this.getInfo,this)},getInfo:function(e,i){t.isEmpty(i)||this.fetch()},url:function(){var e=t.isNull(this.get("maxResults"))?!1:this.get("maxResults");return this.get("type"),"https://gdata.youtube.com/feeds/api/"+this.get("type")+"/"+this.get("id")+"?v=2&alt=jsonc"+(e?"&max-results="+e:"")},parse:function(t){return t.data}});return i});