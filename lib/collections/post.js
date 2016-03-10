Posts = new Mongo.collection('posts');

Posts.allow({
	insert: function(userID, doc) {
		//Only allow posting if you are signed in.
		return !!userID;
	},
	update: function(userID, doc) {
		//Only allow editing if you are signed in.
		return !!userID;
	}
});