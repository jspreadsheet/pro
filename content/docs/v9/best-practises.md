Documentation



# Best Practises

## Customizations

Case study: A client hired a developer to build a software. The developer is using some open source libraries and he decided that would be easier to implement some changes directly in the source code of one of those libraries. The software is working great and the client is very happy. After some time, there is a new library version which provides great new feature and security updates. How to upgrade the client software with the new libraries. The developer is no longer available. A complete refactor and a lot of new investments would be needed. For this reason is really import flexible libraries and the core must be preserved.  It is important that all customization and scripting are decoupled from the library files. This allows the developer to get library upgrades and avoid disruption on their customizations. JSS provides four different ways developers can implement customizations. 

  * **Custom editors** : Enables the developer to create a custom way for users to enter data in the cells; 
  * **Events** : Helps to implement business rules based on the user interactions; It is possible to intercept, cancel or change the result of the user interaction;
  * **Plugins** : Provides ways to implement new features on the spreadsheet or customize some of the existing method behaviors;
  * **Extensions** : Encapsulates a collection of customizations above that needs to share scope or interact between them.

In addition to those, there direct and simple ways to customize the toolbar, the context menu, and the sorting method. 

### Custom editors

JSS provides several native editors and an easy way for developers to create new ones. That allows developers to integrate external components and create customized ways for the user to enter data into cells. 

[How do I create a new cell editor?](/docs/v9/editors)

 

### Events

JSS provides a great number of events, before events, and a global event handler. The events are the easier way to bind methods to the spreadsheet to respond to the user interactions. The before events allow developers to intercept, cancel or change a user interaction. And the global event handler can centralize all events in a single method. An example of before events is the onbeforepaste. Using this event the developer can parse, change the data or cancel the paste event. 

[Event documentation](/docs/v9/events)

 

### Plugins

A plugin provides a way to change or implement new features on the spreadsheet. 

[How do I create a new plugin?](/docs/v9/plugins)

 

## Versioning

If you are using a CDN always point to a specific version and not to the lastest file. That will avoid disruptions on your side. 
