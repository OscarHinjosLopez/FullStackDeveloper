# Repositorios Remotos

## Listar repositorios remotos
git remote
## Agregar un repositorio remoto
git remote add <nombre> <url>
## Traer cambios de un repositorio remoto
git fetch <nombre_remoto>
## Traer cambios de una rama remota
git pull <nombre_remoto> <rama_remota>
## Enviar cambios a un repositorio remoto
git push <nombre_remoto> <rama_local>
## Eliminar un repositorio remoto
git remote rm <nombre_remoto>
## Mostrar información sobre un repositorio remoto específico
git remote show <nombre_remoto>
## Mostrar las ramas de seguimiento para los repositorios remotos
git remote show <nombre_remoto> --verbose

## Avanzado

## Traer actualizaciones de todos los repositorios remotos
git remote update
## Forzar el envío de cambios a un repositorio remoto, sobrescribiendo el historial remoto
git push --force <nombre_remoto> <rama_local>
## Enviar todas las etiquetas a un repositorio remoto
git push --tags <nombre_remoto>
## Renombrar un repositorio remoto
git remote rename <viejo_nombre> <nuevo_nombre>
## Cambiar la URL de un repositorio remoto
git remote set-url <nombre> <nueva_url>
## Eliminar ramas de seguimiento remoto obsoletas
git remote prune <nombre_remoto>
## Listar todas las ramas remotas que han sido fusionadas en la rama actual
git branch -r --merged
## Listar todas las ramas remotas que aún no han sido fusionadas en la rama actual
git branch -r --no-merged
## Traer actualizaciones de un repositorio remoto y podar ramas de seguimiento remoto obsoletas
git fetch -p

## Seguir una rama remota y configurar la rama local para sincronizarse automáticamente con ella
git branch --track <nombre_rama> <nombre_remoto>/<rama_remota>
## Configurar una rama local existente para seguir una rama remota
git branch -u <nombre_remoto>/<rama_remota>
## Enviar una rama a un repositorio remoto y configurarla para seguir la rama remota
git push -u <nombre_remoto> <rama_local>
## Eliminar la asociación de seguimiento entre una rama local y una remota
git branch --unset-upstream <nombre_rama>