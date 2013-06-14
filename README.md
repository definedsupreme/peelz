# Peelz - Page Corner Peel jQuery Plugin

Althought is is still a beta release. This plugin is very light weight (only 4kb) and simple. More options will be added later. You can style it with css and supports full HTML unlike other corner page peel plugins.


## Documentation

To create the peelable page corner simply run the plugin on a standard ul element with two li elements within it. You can give them classes or IDs to target and style them with css.

### How to use

        $('ul.selector').peelz();

### Options

Peelz has 4 simple options. You have 2 containers and you can set the height and width of both.

* sHeight: the height of your small container
* sWidth: the width of your small container
* lHeight: the height of your large container
* lWidth: the width of your large container
* 

  			$("#page_peel").peelz({
					sHeight: 100,
					sWidth: 100,
					lHeight: 400,
					lWidth: 400
				});
           
### HTML

Peelz triggers the ul to reconstruct its self and build the page corner. An example is included to show how this could be used.


		<ul id="page_peel">
			<li>Small Content</li>
			<li>Large Content</li>
		</ul>




## License / Credits

This plugin is released under the MIT license. It is simple and easy to understand and places almost no restrictions on what you can do with the code.
[More Information](http://en.wikipedia.org/wiki/MIT_License)




