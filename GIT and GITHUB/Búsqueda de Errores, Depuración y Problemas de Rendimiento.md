## Iniciar una sesión de bisect para encontrar el commit que introdujo un error
git bisect start
## Marcar un commit como "malo", indicando que contiene el error
git bisect bad <id_commit>
## Marcar un commit como "bueno", indicando que no contiene el error
git bisect good <id_commit>
## Finalizar la sesión de bisect y regresar a la rama/commit original
git bisect reset
## Verificar la integridad del repositorio Git
git fsck
## Ejecutar la recolección de basura para optimizar el rendimiento del repositorio
git gc
## Eliminar archivos y directorios no rastreados (usar con precaución)
git clean -df