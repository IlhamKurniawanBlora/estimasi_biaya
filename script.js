function calculateCOCOMO() {
    const form = document.getElementById('cocomoForm');

    // Ambil nilai KLOC
    const kloc = parseFloat(form.kloc.value);

    // Ambil nilai Effort Multipliers
    const rely = parseFloat(form.rely.value);
    const data = parseFloat(form.data.value);
    const cplx = parseFloat(form.cplx.value);
    const ruse = parseFloat(form.ruse.value);
    const docu = parseFloat(form.docu.value);
    const time = parseFloat(form.time.value);
    const stor = parseFloat(form.stor.value);
    const pvol = parseFloat(form.pvol.value);

    // Ambil nilai Cost Drivers
    const acap = parseFloat(form.acap.value);
    const pcap = parseFloat(form.pcap.value);
    const aexp = parseFloat(form.aexp.value);
    const pexp = parseFloat(form.pexp.value);
    const ltex = parseFloat(form.ltex.value);
    const pcon = parseFloat(form.pcon.value);
    const tool = parseFloat(form.tool.value);
    const site = parseFloat(form.site.value);
    const sced = parseFloat(form.sced.value);

    // Estimasi usaha (effort) dengan model COCOMO II
    const EAF = rely * data * cplx * ruse * docu * time * stor * pvol * acap * pcap * aexp * pexp * ltex * pcon * tool * site * sced;
    const effort = 2.94 * Math.pow(kloc, 1.1) * EAF;

    // Estimasi durasi proyek
    const duration = 2.5 * Math.pow(effort, 0.38);

    // Estimasi biaya
    const cost = effort * 1000; // Asumsi biaya per person-month adalah 1000 currency units

    // Tampilkan hasil estimasi
    form.effortEstimation.value = effort.toFixed(2);
    form.duration.value = duration.toFixed(2);
    form.cost.value = cost.toFixed(2);
}
