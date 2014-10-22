_patterns
===
This folder contains the modular interface partials and component specific markup for: 

1. **_elements**

Pattern library standard, it contains the basic interface 'atoms', html tags, e.g. h1, h2, p, ul, li etc. 
Default styles come from src/scss/partials/_base.scss

2. **_components**

Combination of the elements, eg. media object, primary-, secondary nav, search box,  pagination, news spotlight, image gallery, hero, audio, video etc.

_news-spotlight-01/  
	_news-spotlight-01.html
	_news-spotlight-01.sccs
	_news-spotlight-01.js
	_news-spotlight-01.md

The component specific .html, .sccs, .js AND .md/.json files are   contained in the component folder to separate markup, presentation, behaviour and content right from this basic level. 

The idea is that once the page examples are assembled, the copy of each page can be updated easily by editing a simple markdown file. The updated copy will replace the default text of the elements in each component added to the page.  

Up to this layer in the pattern library structure, the site should output a generic, neutral, interactive wireframe - great tool for exploring content priorities early and for user testing from the beginning with no additional effort. 

3. **_combinations** 

Combined-components, the bigger page layout 'chunks'. These are project specific, e.g. header, footer.