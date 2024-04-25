# Inicializar un nuevo repositorio Git
git init
# Clonar y crear una copia local de un repositorio remoto
git clone <url>
# Configurar ajustes globales de Git
git config --global <nombre_ajuste> <valor>
# Configurar ajustes locales de Git para un repositorio específico
git config --local <nombre_ajuste> <valor>

## Avanzado

# Mostrar un resumen de tus ajustes de configuración de Git
git config --list
# Establecer un editor de texto personalizado para mensajes de Git
git config --global core.editor "<comando_editor>"
# Crear un alias de comando Git
git config --global alias.<atajo> <comando>
# Habilitar la colorización automática de la salida de Git
git config --global color.ui auto
# Almacenar en caché las credenciales de Git durante cierto tiempo
git config --global credential.helper 'cache --timeout=<segundos>'
# Configurar Git para detectar tipos específicos de errores de espacios en blanco
git config --global core.whitespace <opciones>
# Podar automáticamente ramas de seguimiento remoto al actualizar
git config --global fetch.prune true
# Establecer una herramienta de diferenciación personalizada para Git
git config --global diff.tool <herramienta>
# Establecer una herramienta de fusión personalizada para Git
git config --global merge.tool <herramienta>
# Comparar cambios usando una herramienta de diferenciación personalizada
git difftool
# Resolver conflictos de fusión con una herramienta de fusión personalizada
git mergetool
