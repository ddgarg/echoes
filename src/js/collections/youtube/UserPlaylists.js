// Youtube user playlist service to perform crud playlist 
// operations: insert, delete, udpate, etc..
var Backbone = require('backbonejs');
var YoutubePlaylistItemsService = require('../../models/youtube/YoutubePlaylistItemsService.js')
var PlaylistsService = require('../../models/youtube/PlaylistsService.js');
var PlaylistItems = require('../../models/youtube/playlist-items.js');

var UserPlaylists = Backbone.Collection.extend({

	model: YoutubePlaylistItemsService,

	factory: new PlaylistsService(),
	provider: new PlaylistsService({ fetchAll: true }),
	updater: new PlaylistItems(),

	initialize: function () {
		this.listenTo(this.provider, 'change:items', this.updateItems);
		this.listenTo(this.updater, 'change:result', this.addResource);
	},

	comparator: function (item) {
		return item.attributes.snippet.title.toLowerCase();
	},

	insert: function (playlistId, videoId) {
		this.updater.insert(playlistId, videoId);
	},

	create: function (model) {
		this.factory.get('resource').snippet.title = model.title;
		this.factory.create();
		this.factory.set(this.factory.defaults, { silent: true });
	},

	list: function () {
		this.provider.fetch();
	},

	updateItems: function(provider, items){
		if (items) this.set(items);
		this.trigger('update', items);
	},

	addResource: function (resource) {
		this.trigger('added', resource);
	},

	removeItemById: function (id) {
		this.remove(this.get(id));
	}
});
   
module.exports = UserPlaylists;