define(["jquery","underscore","backbone","text!templates/youtube_playlist_list_item.html"],function(e,t,n,r){var i=n.View.extend({tagName:"li",events:{"click a":function(e){e.preventDefault(),this.model.set("adding",!0,{silent:!0}),this.render(),this.model.trigger("change:adding",this.model)}},initialize:function(){this.model.set("adding",!1,{silent:!0})},template:t.template(r),render:function(){var e=this.model.attributes,t=this.model.toJSON().snippet;return t.size=e.contentDetails.itemCount,t.id=e.id,t.adding=e.adding,t.message="",this.$el.html(this.template(t)),this}}),s=n.View.extend({view:{type:i},initialize:function(){this.listenTo(this.collection,"change:adding",this.onAdd)},onAdd:function(e){e.get("adding")&&this.trigger("adding",e.id)},reset:function(){this.collection.each(function(e){e.set("message","",{silent:!0})})}});return s});