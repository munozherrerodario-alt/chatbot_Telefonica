export interface DocumentMetadata {
  id: string;
  title: string;
  version: string;
  owner: string;
  vigencia: string;
  categoria: string;
  content: string; // Simulated content for the RAG demo
}

export const KNOWLEDGE_BASE: DocumentMetadata[] = [
  {
    id: "01",
    title: "Procedimiento Alta Fibra Empresas",
    version: "3.1",
    owner: "Eq. Operaciones Red",
    vigencia: "30/06/2026",
    categoria: "CAT-01",
    content: "Para dar de alta un nuevo acceso de fibra en una sede empresarial, el cliente debe: 1. Solicitar el estudio de cobertura a través del portal GESTIONA. 2. Una vez validada la cobertura, el técnico de red asignará una cita en un plazo máximo de 48h. 3. La instalación física requiere acceso al cuarto RITI del edificio. 4. Se instalará un router profesional con configuración pre-cargada."
  },
  {
    id: "02",
    title: "Guia Diagnostico Conectividad Movil",
    version: "2.5",
    owner: "Soporte Tecnico Empresas",
    vigencia: "15/09/2026",
    categoria: "CAT-01",
    content: "Si la conexión de datos móviles es lenta: 1. Verifique que el APN configurado sea 'telefonica.es'. 2. Realice un test de velocidad desde la app 'Mi Movistar Empresas'. 3. Si la velocidad es inferior a 5Mbps en zona 5G, reinicie el terminal. 4. Si el problema persiste, el soporte técnico realizará un reset de línea en HLR."
  },
  {
    id: "03",
    title: "Procedimiento Migracion ADSL a Fibra",
    version: "1.9",
    owner: "Eq. Migraciones",
    vigencia: "01/04/2026",
    categoria: "CAT-01",
    content: "Pasos para migrar de ADSL a Fibra sin corte: 1. Se programa la instalación de fibra en paralelo a la línea ADSL existente. 2. El servicio ADSL se mantiene activo hasta que la fibra esté sincronizada y navegando. 3. Una vez confirmada la navegación en fibra, se procede a la baja administrativa del ADSL en un plazo de 24h. No hay pérdida de servicio durante el proceso."
  },
  {
    id: "04",
    title: "Procedimiento Cambio Velocidad y Bonos Datos",
    version: "2.2",
    owner: "Producto Digital",
    vigencia: "30/11/2026",
    categoria: "CAT-01",
    content: "Los cambios de velocidad en fibra (de 300Mb a 1Gb) se aplican de forma remota en un máximo de 2 horas tras la solicitud. Los bonos de datos extra para líneas móviles son de aplicación inmediata y se facturan de forma prorrateada."
  },
  {
    id: "05",
    title: "Guia Instalacion Centralita IP Empresas",
    version: "4.0",
    owner: "Eq. Voz Empresarial",
    vigencia: "31/10/2026",
    categoria: "CAT-02",
    content: "Para instalar la centralita IP: 1. Conecte el switch PoE al router principal. 2. Conecte los terminales IP a los puertos del switch. 3. Acceda al panel de administración 'Cloud PBX' con sus credenciales. 4. Configure el plan de numeración y las locuciones de bienvenida."
  },
  {
    id: "06",
    title: "Procedimiento Activacion Extension Movil",
    version: "1.6",
    owner: "Soporte Voz",
    vigencia: "28/02/2026",
    categoria: "CAT-02",
    content: "La activación de extensiones móviles para teletrabajo se realiza desde el portal de autogestión. Permite recibir llamadas de la centralita fija directamente en el móvil corporativo mediante la app 'Comunicación Unificada'."
  },
  {
    id: "07",
    title: "Guia Comercial Fusion Empresas",
    version: "3.3",
    owner: "Comercial Empresas",
    vigencia: "30/04/2026",
    categoria: "CAT-02",
    content: "El paquete Fusion Empresas incluye: Fibra simétrica, líneas móviles con datos ilimitados, centralita en la nube y soporte premium 24/7. Se contrata a través de su gestor comercial asignado o llamando al 1489."
  },
  {
    id: "08",
    title: "Procedimiento Contratacion Cloud Gestionado",
    version: "2.0",
    owner: "Eq. Cloud y Hosting",
    vigencia: "31/12/2026",
    categoria: "CAT-03",
    content: "El servicio de Cloud Gestionado se contrata definiendo los recursos necesarios (vCPU, RAM, Disco). Telefónica se encarga de la administración del sistema operativo, parches de seguridad y monitorización 24x7."
  },
  {
    id: "09",
    title: "Guia Tecnica Ciberseguridad Gestionada",
    version: "1.4",
    owner: "Eq. Ciberseguridad",
    vigencia: "30/09/2026",
    categoria: "CAT-03",
    content: "La solución de ciberseguridad gestionada cubre: Firewall perimetral, protección de puesto de trabajo (EDR), filtrado de navegación y análisis de vulnerabilidades mensual."
  },
  {
    id: "10",
    title: "Procedimiento Backup y Recuperacion de Datos",
    version: "2.7",
    owner: "Eq. Cloud y Hosting",
    vigencia: "31/07/2026",
    categoria: "CAT-03",
    content: "El servicio de Backup utiliza tecnología Veeam. Las copias son diarias con retención de 30 días. La recuperación de datos se puede solicitar por ticket de soporte con un RTO (Recovery Time Objective) de 4 horas."
  },
  {
    id: "11",
    title: "Procedimiento Tramitacion Bajas y Portabilidades",
    version: "3.5",
    owner: "Eq. Retencion",
    vigencia: "30/06/2026",
    categoria: "CAT-04",
    content: "La baja de una línea sin penalización solo es posible si se ha cumplido el periodo de permanencia (normalmente 12 o 24 meses). Debe solicitarse con 15 días de antelación."
  },
  {
    id: "12",
    title: "Politica SLA y Reclamaciones Empresas",
    version: "2.1",
    owner: "Calidad de Servicio",
    vigencia: "31/12/2026",
    categoria: "CAT-04",
    content: "El tiempo de resolución garantizado (SLA) ante una avería crítica de fibra es de 6 horas laborables. En caso de incumplimiento, el cliente tiene derecho a una compensación automática en factura según el contrato."
  }
];

export const CATEGORIES = {
  "CAT-01": { name: "Conectividad y Red", color: "bg-blue-600" },
  "CAT-02": { name: "Telefonía y Centralitas", color: "bg-cyan-600" },
  "CAT-03": { name: "Servicios Cloud y Cloud", color: "bg-indigo-600" },
  "CAT-04": { name: "Atención y Procesos Comerciales", color: "bg-slate-600" }
};
