# Ramificación y Fusión

## Listar todas las ramas
git branch
## Crear una nueva rama
git branch <nombre_rama>
## Cambiar a una rama específica
git checkout <nombre_rama>
## Fusionar una rama en la rama actual
git merge <nombre_rama>
## Eliminar una rama específica
git branch -d <nombre_rama>
## Listar todas las ramas remotas
git branch -r

## Avanzado

## Listar ramas con información adicional
git branch -vv
## Crear una nueva rama basada en una rama remota
git checkout -b <nombre_rama> <nombre_remoto>/<rama_remota>
## Cancelar fusión en caso de conflictos
git merge --abort
## Rebasar la rama actual sobre otra rama
git rebase <nombre_rama>
## Cancelar una operación de rebase en curso
git rebase --abort
## Rebase interactivo para editar, combinar, reordenar o eliminar commits
git rebase -i
## Rebase de commits en la rama actual sobre una rama remota de forma interactiva
git rebase -i <nombre_remoto>/<rama_remota>