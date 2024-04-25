# Historial de Commits

## Mostrar el historial de commits
git log
## Mostrar un historial de commits condensado
git log --oneline
## Mostrar un historial de commits con ramificaciones
git log --graph
## Filtrar el historial de commits por autor
git log --author=<nombre_autor>
## Mostrar el historial de commits desde una fecha específica
git log --since=<fecha>
## Mostrar el historial de commits hasta una fecha específica
git log --until=<fecha>

# Etiquetas

## Listar todas las etiquetas
git tag
## Crear una nueva etiqueta en un commit específico
git tag <nombre_etiqueta> <id_commit>
## Crear una etiqueta anotada con un mensaje
git tag -a <nombre_etiqueta> -m "mensaje de la etiqueta"
## Eliminar una etiqueta específica
git tag -d <nombre_etiqueta>
## Eliminar una etiqueta remota específica
git push <nombre_remoto> --delete <nombre_etiqueta>
## Mostrar información sobre una etiqueta específica
git show <nombre_etiqueta>