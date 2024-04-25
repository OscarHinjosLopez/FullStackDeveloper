# Tips y Trucos

## Elegir interactivamente partes (hunks) de archivos para agregar al área de preparación
git add -p

## Mostrar el historial de commits y los parches asociados para un archivo específico
git log -p <nombre_archivo>
## Personalizar el formato de la salida del registro de Git
git log --pretty=format:"%h - %an, %ar : %s"
## Buscar texto en los mensajes de commit (útil para localizar cambios específicos)
git log --grep="<texto>"
## Ver rápidamente los cambios en el directorio de trabajo desde el último commit
git diff --stat
## Mostrar el historial de la rama con decoración para ver dónde se han dividido o fusionado las ramas
git log --oneline --decorate --graph

## Almacenar cambios en el árbol de trabajo, incluyendo archivos no rastreados
git stash save -u
## Crear un commit vacío, útil al probar reglas de protección de rama
git commit --allow-empty -m "Mensaje del commit vacío"

## Configurar el paginador de salida de Git para salir cuando la salida sea menor que una pantalla, y no limpiar la pantalla después de mostrarla
git config --global core.pager 'less -RFX'
## Usar la función de autocorrección de Git para corregir comandos mal escritos
git config --global help.autocorrect 1
## Listar alias para comandos de Git
git config --get-regexp alias

## Realizar una ejecución en seco de la fusión sin fusionar realmente las ramas
git merge --no-commit --no-ff <nombre_rama>
## Mostrar una representación en forma de árbol de la estructura del repositorio
git ls-tree --name-only -r -t HEAD