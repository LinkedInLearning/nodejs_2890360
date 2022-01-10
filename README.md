# Node.js lernen

Dies ist das Repository für den **LinkedIn Learning** Kurs Node.js lernen. Den gesamten Kurs finden Sie auf [LinkedIn Learning][lil-course-url].

![COURSENAME][lil-thumbnail-url] 

Ihr idealer Einstieg in die populäre JavaScript-Laufzeitumgebung: Sie lernen Schritt für Schritt, wie Sie mit Node.js JavaScript-Programme starten und stoppen, auf das Dateisystem zugreifen, asynchrone Operationen ausführen, und mit der Außenwelt kommunizieren können, und sehen, wie Sie das Modulsystem effektiv nutzen. Ein Kapitel widmet sich dem Paketmanager NPM, mit dessen Hilfe Sie auf zahlreiche vorgefertigte Komponenten zurückgreifen. Mit Abschluss des Kurses sind Sie in der Lage, komplette JavaScript-Anwendungen und Server-Dienste zu schreiben.

## Anleitung

Dieses Repository hat Branches für jedes Video im Kurs. Verwenden Sie das Ausklappmenü "Branch: ..." in GitHub um zwischen den unterschiedlichen Branches hin und her zu wechseln bzw. um bei einem spezifischen Status einzusteigen. Oder Sie fügen `/tree/BRANCH_NAME` der URL hinzu um direkt in den gewünschten Branch zu wechseln.

## Branches

Die Git Branches sind passend zu den Videos im Kurs strukturiert. Die Namenskonvention lautet `Kapitel#_Video#`. Der Branch `02_03` beinhaltet zum Beispiel die Übungen für das dritte Video im zweiten Kapitel. 
Einige Branches haben einen Anfangsstatus (`b`) für "beginning" und einen Endstatus (`e`). Der Branch mit dem `e` am Ende beinhaltet in diesem Fall stets den Code der am Ende des Videos zu sehen ist. Der `master` Branch beinhaltet den initialen Quellcode und wird nicht für die Übungen innerhalb des Kurses genutzt.

Wenn Sie von einem Branch nach Änderungen zum nächsten Branch wechseln, erhalten Sie möglicherweise die folgende Meldung:

```
error: Your local changes to the following files would be overwritten by checkout:        [files]
Please commit your changes or stash them before you switch branches.
Aborting
```

Dieses Problem lösen Sie wie folgt:
    Add changes to git using this command: git add .
    Commit changes using this command: git commit -m "some message"

## Installation

1. Klonen Sie das Repository in Ihre lokale Maschine unter Verwendung von terminal (Mac), CMD (Windows) oder ein anderes Werkzeug mit grafischer Bedienoberfläche wie SourceTree.

### Autor

**Tim Schürmann**

_[Berufsbezeichnung hier eintragen]_

Sehen Sie sich andere Kurse des Autors auf [LinkedIn Learning](https://www.linkedin.com/in/tim-schürmann-aab882105) an.

[lil-course-url]: https://www.linkedin.com/learning/node-js-lernen/schritt-fur-schritt-anleitung-um-komplette-javascript-anwendungen-und-server-dienste-zu-schreiben
[lil-thumbnail-url]: https://media-exp1.licdn.com/dms/image/C4E0DAQE7cDtcey48-w/learning-public-crop_675_1200/0/1641379944096?e=1641906000&v=beta&t=7TwUM4zmx_G_6h8FjJommGCyvtMyShmsGswOd49KIwI
