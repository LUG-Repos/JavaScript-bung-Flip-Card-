# HTML CSS JAVASCRIPT Grundlagen

Vom Browser gelesene Inhalte begrenzen sich auf HTML, CSS und JavaScript. HTML ist die Sprache, die die Struktur einer Webseite definiert. CSS wird verwendet, um das Aussehen der Webseite zu gestalten, während JavaScript für die Interaktivität und Funktionalität der Webseite verantwortlich ist, also die Logik.

## HTML (HyperText Markup Language)
Ein Html-Dokument besteht aus sogenannenten Tags, diese folgen einem bestimenten Grundaufbau:

```
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dokument</title>
</head>
<body>
    <!-- Inhalt der Webseite -->
</body>
</html>
```

**DOCTYPE html**: Diese Zeile teilt dem Browser mit, dass es sich um ein HTML5-Dokument handelt. in früheren Versionen von HTML gab es verschiedene DOCTYPE-Deklarationen, aber mit HTML5 wurde diese vereinfacht. Wenn wir heute mit einer deklaration auf HTML 4 setzten wüsste unser Browser das er kein HTML5 Dokument vorliegen hat und könnte es falsch interpretieren. Der Browser wechselt in den sogenannten "Quirks Mode", in dem er versucht, das Dokument so gut wie möglich zu rendern, aber es können Darstellungsfehler auftreten.

**html**: Das ist das Wurzelelement eines HTML-Dokuments. Alle anderen Elemente müssen innerhalb dieses Tags liegen. Das Attribut "lang" gibt die Sprache des Dokuments an, in diesem Fall Deutsch ("de"). Dies ist wichtig für Suchmaschinen und Screenreader, um die richtige Sprache zu erkennen.

**head**: Dieser Abschnitt enthält Metadaten über das Dokument, wie den Zeichensatz, die Ansichtseinstellungen und den Titel der Seite. Diese Informationen sind für die Darstellung und Funktionalität der Webseite wichtig, werden aber nicht direkt auf der Seite angezeigt. Der Head dient zudem der kommunikation mit Suchmaschinen und anderen Diensten und zudem enthält er Verlinkungen zu externen Ressourcen wie CSS-Dateien oder JavaScript-Dateien.

**body**: Hier befindet sich der eigentliche Inhalt der Webseite, der für die Besucher sichtbar ist. Alle Texte, Bilder, Links und andere Elemente, die auf der Seite angezeigt werden sollen, müssen innerhalb des Body-Tags platziert werden.


### HTML-Kontainer
Ein Kontainer ist ein HTML-Element, das andere Elemente enthält. Es dient dazu, eine Gruppe von Elementen zusammenzufassen und zu organisieren. Kontainer können verwendet werden, um das Layout einer Webseite zu strukturieren, indem sie verschiedene Abschnitte oder Bereiche definieren. Ein häufig verwendetes Kontainer-Element ist das `<div>`-Tag, das als generischer Block-Element dient. Es hat keine semantische Bedeutung, sondern wird hauptsächlich für die Gruppierung von Inhalten verwendet. Andere Kontainer-Elemente sind `<header>`, `<nav>`, `<main>`, `<section>`, `<article>` und `<footer>`, die jeweils eine spezifische semantische Bedeutung haben und zur Strukturierung von Webseiteninhalten verwendet werden können. Kontainer sind wichtig, um die Webseite übersichtlich und gut organisiert zu gestalten, sowohl für die Entwickler als auch für die Besucher der Webseite. 
Das Span-Element ist ebenfalls ein Kontainer dieser dient allerdings eher zur Gruppierung von Inline-Elementen, während das Div-Element hauptsächlich für die Gruppierung von Block-Elementen verwendet wird. Das Span-Element wird oft verwendet, um bestimmte Teile eines Textes zu formatieren oder zu stylen, ohne dass es eine semantische Bedeutung hat. 

### Css (Cascading Style Sheets)
CSS ist eine Stylesheet-Sprache, die verwendet wird, um das Aussehen und Layout von HTML-Dokumenten zu gestalten. Mit CSS können Sie Farben, Schriftarten, Abstände, Größen und viele andere visuelle Aspekte einer Webseite anpassen. 

#### Klassen, IDs und Selektoren
In CSS werden Klassen, IDs und Selektoren verwendet, um bestimmte Elemente auf einer Webseite zu identifizieren und zu stylen.
- **Klassen**: Eine Klasse ist eine benutzerdefinierte Bezeichnung, die einem oder mehreren HTML-Elementen zugewiesen werden kann. Klassen werden mit einem Punkt (.) gefolgt von einem Namen definiert. Zum Beispiel: `.meine-klasse { color: red; }` würde alle Elemente mit der Klasse "meine-klasse" rot färben.
- **IDs**: Eine ID ist eine eindeutige Bezeichnung, die einem einzelnen HTML-Element zugewiesen wird. IDs werden mit einem Hashtag (#) gefolgt von einem Namen definiert. Zum Beispiel: `#meine-id { font-size: 20px; }` würde das Element mit der ID "meine-id" auf eine Schriftgröße von 20 Pixeln setzen.
- **Selektoren**: Selektoren sind Muster, die verwendet werden, um Elemente in einem HTML-Dokument auszuwählen und zu stylen. Es gibt verschiedene Arten von Selektoren, darunter Elementselektoren (z.B. `p { color: blue; }` für alle Absatz-Elemente), Klassenselektoren (z.B. `.meine-klasse { color: red; }` für alle Elemente mit der Klasse "meine-klasse") und ID-Selektoren (z.B. `#meine-id { font-size: 20px; }` für das Element mit der ID "meine-id"). 

#### Asnprechen von unter Elementen
In CSS können wir ein Unterlement über seine ID, seine Klasse oder über seinen Tag ansprechen. Es ist auch möglich, mehrere Selektoren zu kombinieren, um spezifischere Stile anzuwenden. Zum Beispiel könnte man `div .meine-klasse { background-color: yellow; }` verwenden, um alle `<div>`-Elemente mit der Klasse "meine-klasse" gelb zu hinterlegen.

#### Anordnung von Elementen
Die Anordnung von Elementen auf einer Webseite kann mit CSS auf verschiedene Weisen gesteuert werden. Eine Möglichkeit ist die Verwendung von Flexbox, einem Layout-Modul, das es ermöglicht, Elemente flexibel anzuordnen und auszurichten. Mit Flexbox können Sie Elemente horizontal oder vertikal anordnen, den verfügbaren Platz gleichmäßig verteilen und die Reihenfolge der Elemente ändern.

**Flexbox**: Flexbox ist ein CSS-Layout-Modul, das es ermöglicht, Elemente flexibel anzuordnen und auszurichten. Mit Flexbox können Sie Elemente horizontal oder vertikal anordnen, den verfügbaren Platz gleichmäßig verteilen und die Reihenfolge der Elemente ändern. Flexbox bietet eine einfache Möglichkeit, responsive Layouts zu erstellen, die sich an verschiedene Bildschirmgrößen anpassen.

**Block- und Inline-Elemente**: Block-Elemente sind HTML-Elemente, die standardmäßig eine neue Zeile beginnen und die gesamte verfügbare Breite einnehmen. Beispiele für Block-Elemente sind `<div>`, `<p>` und `<h1>`. Inline-Elemente hingegen nehmen nur so viel Platz ein, wie sie benötigen, und können neben anderen Elementen auf derselben Zeile stehen. Beispiele für Inline-Elemente sind `<span>`, `<a>` und `<strong>`. Die Anordnung von Block- und Inline-Elementen kann mit CSS gesteuert werden, um das gewünschte Layout zu erreichen.


#### Hover-Effekt
Der Hover-Effekt ist eine CSS-Pseudoklasse, die es ermöglicht, das Aussehen eines Elements zu ändern, wenn der Benutzer mit der Maus darüber fährt. Der Hover-Effekt wird häufig verwendet, um interaktive Elemente wie Links oder Schaltflächen hervorzuheben. Zum Beispiel könnte man `a:hover { color: red; }` verwenden, um die Farbe eines Links rot zu ändern, wenn der Benutzer mit der Maus darüber fährt. Der Hover-Effekt kann auch für andere Elemente verwendet werden, um visuelles Feedback zu geben und die Benutzererfahrung zu verbessern.

#### Animationen
CSS-Animationen ermöglichen es, Elemente auf einer Webseite zu animieren, indem sie verschiedene Stile über einen bestimmten Zeitraum hinweg ändern. Mit CSS-Animationen können Sie beispielsweise die Position, Größe, Farbe oder Transparenz eines Elements animieren. Um eine CSS-Animation zu erstellen, müssen Sie zunächst die Schlüsselbilder (keyframes) definieren, die die verschiedenen Stile zu bestimmten Zeitpunkten festlegen. Dann können Sie die Animation auf ein Element anwenden, indem Sie die entsprechenden CSS-Eigenschaften verwenden. Zum Beispiel könnte man `@keyframes meine-animation { from { opacity: 0; } to { opacity: 1; } }` definieren, um eine einfache Fade-In-Animation zu erstellen, und dann `animation: meine-animation 2s;` verwenden, um die Animation auf ein Element anzuwenden. CSS-Animationen können verwendet werden, um die Benutzererfahrung zu verbessern und visuelles Interesse auf einer Webseite zu erzeugen.


#### Display und Positionierung
Die CSS-Eigenschaft "display" steuert, wie ein Element auf einer Webseite angezeigt wird. Es gibt verschiedene Werte für die "display"-Eigenschaft, darunter "block", "inline","inline-block", "flex" und "grid". Der Wert "block" bewirkt, dass das Element eine neue Zeile beginnt und die gesamte verfügbare Breite einnimmt. Der Wert "inline" bewirkt, dass das Element nur so viel Platz einnimmt, wie es benötigt, und neben anderen Elementen auf derselben Zeile steht. Der Wert "inline-block" kombiniert die Eigenschaften von Block- und Inline-Elementen, indem es das Element wie ein Block-Element behandelt, aber es ermöglicht auch, dass andere Elemente neben ihm stehen. Der Wert "flex" aktiviert das Flexbox-Layout-Modul, während der Wert "grid" das CSS Grid-Layout-Modul aktiviert.
Display: None versteckt ein Element vollständig von der Webseite, es nimmt keinen Platz mehr ein und ist für die Benutzer nicht sichtbar. Es ist wichtig zu beachten, dass das Element mit "display: none" nicht nur unsichtbar ist, sondern auch nicht mehr im Layout der Seite berücksichtigt wird. Das bedeutet, dass andere Elemente den Platz einnehmen können, den das versteckte Element zuvor eingenommen hat. Wenn Sie ein Element wieder sichtbar machen möchten, können Sie die "display"-Eigenschaft auf einen anderen Wert setzen, wie zum Beispiel "block" oder "inline".