# Blaze

Web-Frontend-Framework

## class hidden / visible

zum Ein- und Ausblenden von Div-Containern bei unterschiedlichen Viewports.
Die Klassen `.hidden` und `.visible` sind vom Viewport unabhängig.

Klasse        | <768px  | <992px  | <1200px
------------- | ------- | ------- | --------
hidden        | hidden  | hidden  | hidden
hidden-sm     | hidden  | visible | hidden
hidden-md     | visible | hidden  | visible
hidden-lg     | visible | visible | hidden
visible       | visible | visible | visible
visible-sm    | visible | hidden  | hidden
visible-md    | hidden  | visible | hidden
visible-lg    | hidden  | hidden  | visible

### Beispiel

```html
 <div class="visible-lg">
	Div 1
 </div>
```

> Nur bei einem Viewport der größer als 1200 px ist, wird der Div-Container eingeblendet.
