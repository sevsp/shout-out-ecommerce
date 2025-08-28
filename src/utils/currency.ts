export const formatGs = (value: number) =>
    new Intl.NumberFormat("es-PY", {
        style: "currency",
        currency: "PYG",
        maximumFractionDigits: 0,
    }).format(value);