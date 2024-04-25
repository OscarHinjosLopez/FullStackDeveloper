
# Trabajar con Parches

## Generar un archivo de parche para un commit específico
git format-patch <id_commit>
## Aplicar un parche a la rama actual
git apply <archivo_parche>
## Aplicar un parche usando el comando "git am" (aplicar buzón)
git am <archivo_parche>