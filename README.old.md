Global Gauge is an interactive web-based visualization that reveals the world's energy and resource usage in an intuitive and engaging way.
It features a 3D draggable globe displaying country-level and sector-level statistics, with clean borders and real-time hover tooltips.
The goal is to make global resource consumptino more understandable and actionable for the public, researchers, and policymakers.
Users can explore energy footprints by country, see how emerging technologies contribute to global demand, and gain insights into the world's environmental impact all in one elegant, interactive interface.

This is part of my Public Interest Technology project for the build4good Navigators program organized by New America.

Using deck.gl
- Built-in Globe support (GlobeView, GlobeLayer, spherical projections, 3D rentering, smooth rotation and interaction)
- Country-Level Data Visualization: Polygon layers for displaying ocuntry boundaries w/ different displays, Icon layers for production facilities, renewable energy sites, etc. Text layers to display country names, stats, Heatmap layers for energy consumption visualization
- Sector-level statistics: Can overlay diff layers for diff energy sectors, color coding and size encoding available
- Interactive features: Hover tooltips, click interactions, smooth animations, responsive design
- Performance and scalability: efficiently handles large amounts of data, lazy loading, webGL based for hardware acceleration rendering
- Integration benefits: Reeact friendly, TS support, extensible 