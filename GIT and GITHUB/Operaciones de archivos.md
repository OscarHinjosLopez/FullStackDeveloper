# Operaciones de Archivos

## Mostrar el estado del árbol de trabajo
git status
## Agregar archivos al área de preparación
git add <archivo(s)>
## Eliminar archivos del árbol de trabajo y el área de preparación
git rm <archivo(s)>
## Mover o renombrar un archivo
git mv <viejo_archivo> <nuevo_archivo>
## Confirmar cambios con un mensaje
git commit -m "mensaje del commit"
## Mostrar diferencias entre el árbol de trabajo y el último commit
git diff

## Avanzado

## Suponer que un archivo rastreado no ha cambiado
git update-index --assume-unchanged <archivo>
## Restaurar el comportamiento normal de seguimiento de cambios
git update-index --no-assume-unchanged <archivo>
## Mostrar diferencias entre dos commits
git diff <id_commit1>..<id_commit2>
## Deshacer el agregado de un archivo, pero mantenerlo en el directorio de trabajo
git rm --cached <nombre_archivo>
