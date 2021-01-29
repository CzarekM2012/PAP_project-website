# Strona Smart Home
### Strona znajduje się [tutaj](https://pap-projekt-smart-home.netlify.app/)
## Funkcje:
- monitorowanie temperatury powietrza i wody, wilgotności powietrza, ilości wygenerowanego i zużytego prądu
- ściąganie nagrań z monitoringu
- przełożenie czasu uruchomienia odżelaziacza
- zmiana nastawu temperatury pompy ciepła
- włączanie i wyłączanie podlewania

## Ograniczenia:
strona została zaprojektowana w celu postawienia jej na Raspberry Pi będącym centrum dla sieci urządzeń Smart Home, a hostowana jest obecnie na netlify, które pozwala na niedużo więcej niż proste, statyczne strony. Z tego powodu duża część funkcjonalności nie została dokończona, np. sterowanie nastawami pompy i podlewaniem wyrzuca jedynie komunikaty do konsoli, ale w docelowej wersji w tych miejscach można byłoby umieścić funkcje spełniające założone funkcjonalności. Co więcej, przeglądanie nagrań z monitoringu, mimo że działało w testach na lokalnym serwerze, nie funkcjonuje na netlify. Być może wiąże się to z tym, że netlify nie pozwala na obsługę cięższych plików wideo, albo nie umożliwia przeglądania plików na serwerze. 
