# Submódulos, Subárboles y Submódulos Avanzados

## Agregar un submódulo al repositorio actual
git submodule add <url_repositorio> <ruta>
## Inicializar y actualizar todos los submódulos de forma recursiva
git submodule update --init --recursive
## Agregar un subárbol al repositorio actual
git subtree add --prefix=<ruta> <url_repositorio>
## Inicializar los submódulos en el repositorio
git submodule init
## Actualizar los submódulos a sus commits más recientes
git submodule update
## Ejecutar un comando específico en cada submódulo
git submodule foreach <comando>
## Desregistrar un submódulo
git submodule deinit <ruta>
