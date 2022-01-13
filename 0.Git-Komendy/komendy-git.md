# git-tutorial

## [](https://github.com/mormar/git-tutorial#konfiguracja-danych-u%C5%BCytkownika)Konfiguracja danych użytkownika

```
git config --global user.name "Imię Nazwisko”
git config --global user.email moj@email.com      

```

weryfikacja:

```
git config user.name  
git config user.email 

```

## [](https://github.com/mormar/git-tutorial#git-przep%C5%82yw-pracy-w-trakcie-nagrania)Git przepływ pracy w trakcie nagrania:

```
touch README.md
git init
git status
git add README.md
git status
git add .
git commit -m "added readme"
git log
git checkout -b featur-section
git branch
git add .
git log
git checkout master
git merge feature-section
git branch -d feature-section
git branch

```

#### [](https://github.com/mormar/git-tutorial#sprawdzenie-wersji)Sprawdzenie wersji

```
git version 

```

#### [](https://github.com/mormar/git-tutorial#inicjalizacja-pustego-repozytorium)Inicjalizacja pustego repozytorium

```
git init

```

#### [](https://github.com/mormar/git-tutorial#sprawdzenie-stanu-plik%C3%B3w)Sprawdzenie stanu plików

```
git status

```

#### [](https://github.com/mormar/git-tutorial#dodanie-plikuzmian-w-pliku-readmemd)Dodanie pliku/zmian w pliku README.md

```
git add README.md

```

#### [](https://github.com/mormar/git-tutorial#dodanie-plik%C3%B3wzmian-w-plikach-w-danym-katalogu)Dodanie plików/zmian w plikach w danym katalogu

```
git add .

```

#### [](https://github.com/mormar/git-tutorial#zapisanie-zmian-do-repozytorium)Zapisanie zmian do repozytorium

```
git commit -m "added readme"

```

#### [](https://github.com/mormar/git-tutorial#wy%C5%9Bwietleni-commit%C3%B3w)Wyświetleni commitów

```
git log

```

#### [](https://github.com/mormar/git-tutorial#utworzenie-ga%C5%82%C4%99zi-feature-section-i-prze%C5%82%C4%85czenie)Utworzenie gałęzi feature-section i przełączenie

```
git checkout -b featur-section

```

#### [](https://github.com/mormar/git-tutorial#wy%C5%9Bwietlenie-ga%C5%82%C4%99zi)Wyświetlenie gałęzi

```
git branch

```

#### [](https://github.com/mormar/git-tutorial#po%C5%82%C4%85czenie-ga%C5%82%C4%99zi-feature-section-z-masterem)Połączenie gałęzi feature-section z masterem

```
git merge feature-section

```

#### [](https://github.com/mormar/git-tutorial#usuni%C4%99cie-ga%C5%82%C4%99zi-feature-section)Usunięcie gałęzi feature-section

```
git branch -d feature-section
```