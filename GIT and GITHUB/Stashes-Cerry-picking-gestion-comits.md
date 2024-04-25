# Stashes

## Guardar temporalmente cambios en el árbol de trabajo
git stash save "mensaje del stash"
## Listar todos los stashes
git stash list
## Aplicar cambios de un stash específico
git stash apply <stash>
## Eliminar un stash específico
git stash drop <stash>
## Eliminar todos los stashes
git stash clear

# Cherry-Picking

## Aplicar un commit específico de una rama a otra
git cherry-pick <id_commit>

# Gestión de Commits

## Modificar el último commit
git commit --amend
## Crear un nuevo commit que deshace cambios de un commit anterior
git revert <id_commit>
## Descartar cambios y mover HEAD a un commit específico
git reset --hard <id_commit>
## Mover HEAD a un commit específico, pero conservar cambios en el área de preparación
git reset --soft <id_commit>
## Mostrar un registro de todos los cambios realizados en el encabezado del repositorio local
git reflog
