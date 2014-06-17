define(["jquery","underscore","backbone","text!templates/youtube_playlist_provider_item.html"],function(e,t,n,r){var i=n.View.extend({template:t.template(r),initialize:function(){this.playerModel=this.model.get("player"),this.listenTo(this.model.youtube().playlist,"done",this.render),this.listenTo(this.playerModel,"change:index",this.updateIndex),this.listenTo(this.model.youtube().info,"change:id",this.ensureSelectedIndex)},render:function(e,n){if(!e)return;this.playlistId=n.id,this.currentIndex=this.playerModel.get("index");var r=t.map(e,this.makeListItem,this);this.$el.html(r.join(""))},makeListItem:function(e,t){var n="";if(!e)return;return n=e&&e.video&&e.video.thumbnail?e.video.thumbnail.hqDefault||e.video.thumbnail.sqDefault:"",this.template({id:e.video.id,title:e.video.title,index:t,position:e.position,playlistId:this.playlistId,current:t===this.currentIndex?"active":"",thumb:n})},updateIndex:function(e,t){this.currentIndex=t,this.$(".active").removeClass("active").end().find(".track-"+t).addClass("active")},ensureSelectedIndex:function(e){this.$(".active").removeClass("active"),this.$(".playlist-provider-item[data-videoid="+e.id+"]").addClass("active")}});return i});