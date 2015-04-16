'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var moment = require('moment');
var yosay = require('yosay');

var JekyllAndYeti = yeoman.generators.Base.extend({
	promptUser: function () {
		var done = this.async();

		this.log(yosay(
			'Welcome to the ' + chalk.cyan('Jekyll and Yeti') + ' generator!' +
			chalk.bgBlue('Jekyll, Foundation, Scss and Grunt!')
		));

		var prompts = [{
			name: 'siteName',
			message: 'What is your sites\'s title ?'
		}, {
			name: 'description',
			message: 'A short description of your site',
			default: 'No Description'
		}, {
			name: 'email',
			message: 'What is your email address ?',
			default: this.user.git.email
		}, {
			name: 'gitAcc',
			message: 'Your Github account ?',
			default: 'jekyll'
		}, {
			name: 'twitter',
			message: 'Your Twitter username ?',
			default: 'jekyllrb'
		}, {
			name: 'mainFolder',
			message: 'Main Jekyll folder ?',
			default: 'jekyll'
		}, {
			name: 'distFolder',
			message: 'Final grunt output folder ? (Note: This is the output of processing the standard Jekyll "_sites" folder)',
			default: 'dist'
		}];

		this.prompt(prompts, function (props) {
			this.siteName = props.siteName;
			this.description = props.description;
			this.email = props.email;
			this.gitAcc = props.gitAcc;
			this.twitter = props.twitter;
			this.mainFolder = props.mainFolder;
			this.distFolder = props.distFolder;

			done();
		}.bind(this));
	},

	scaffoldFolders: function () {
		this.mkdir(this.mainFolder);
		this.mkdir(this.mainFolder + "/_posts")
	},

	copyMainFiles: function () {
		this.copy("_index.md", this.mainFolder + "/index.md");
		this.copy("_about.md", this.mainFolder + "/about.md");

		this.copy("_gruntfile.js", "Gruntfile.js");
		this.copy("_bower.json", "bower.json");
		this.copy("_README.md", "README.md");

		this.directory("_includes", this.mainFolder + "/_includes");
		this.directory("_layouts", this.mainFolder + "/_layouts");
		this.directory("_assets", this.mainFolder + "/assets");
		this.directory("_scss", this.mainFolder + "/_scss");
		this.directory("_blog", this.mainFolder + "/blog");
		this.directory("css", this.mainFolder + "/css");
		this.directory("js", this.mainFolder + "/js");

		var context = {
			site_name: this.siteName,
			pkg_name: this.siteName.replace(/\s+/g, '-').toLowerCase(),
			author_email: this.email,
			site_description: this.description,
			main_folder: this.mainFolder,
			dist_folder: this.distFolder,
			git_acc: this.gitAcc,
			twitter: this.twitter
		};

		// Generate date/times for demo posts
		var posts = ['post1', 'post2', 'post3'];
		var post_times = {};
		var hour = 0;
		for (var i = 0; i < posts.length; i++) {
			var obj = posts[i];
			post_times[obj] = {
				num_date: moment().subtract(hour, 'hours').format('YYYY-MM-DD'),
				date_time: moment().subtract(hour, 'hours').format('YYYY-MM-DD HH:mm:ss')
			};
			hour += 2
		}

		// create demo posts with correct date times
		this.template("_posts/welcome-to-jekyll.markdown", this.mainFolder + "/_posts/" +
		post_times['post1'].num_date + "-welcome-to-jekyll.markdown", post_times['post1']);
		this.template("_posts/and-foundation.markdown", this.mainFolder + "/_posts/" +
		post_times['post2'].num_date + "-and-foundation.markdown", post_times['post2']);
		this.template("_posts/with-yeoman.markdown", this.mainFolder + "/_posts/" +
		post_times['post3'].num_date + "-with-yeoman.markdown", post_times['post3']);

		this.template("_config.yml", this.mainFolder + "/_config.yml", context);
		this.template("_package.json", "package.json", context);
		this.template("_gruntfile.js", "Gruntfile.js", context);
		this.template(".bowerrc", ".bowerrc", context);

		//npm install && bower install
		this.installDependencies();

	}

});

module.exports = JekyllAndYeti;
