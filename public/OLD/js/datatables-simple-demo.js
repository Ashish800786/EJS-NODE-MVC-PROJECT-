window.addEventListener('DOMContentLoaded', event => {

    // Simple-DataTables
    // https://github.com/fiduswriter/Simple-DataTables/wiki

    const datatablesSimple = document.getElementById('datatablesSimple');
    const datatablesSimple1 = document.getElementById('datatablesSimple1');
    const datatablesSimple2 = document.getElementById('datatablesSimple2');
    const datatablesSimple3 = document.getElementById('datatablesSimple3');
    const datatablesSimple4 = document.getElementById('datatablesSimple4');
    const datatablesSimple5 = document.getElementById('datatablesSimple5');

    const datatablesSimple6 = document.getElementById('datatablesSimple6');
    const datatablesSimple7 = document.getElementById('datatablesSimple7');
    const datatablesSimple8 = document.getElementById('datatablesSimple8');
    const datatablesSimple9 = document.getElementById('datatablesSimple9');
    const datatablesSimple10 = document.getElementById('datatablesSimple10');

    if (datatablesSimple) {
        new simpleDatatables.DataTable(datatablesSimple, {
            perPageSelect: [5, 10, 20, 25, 50, 100, 500],
            perPage: 100,
            layout: {
                top: "{search}{select}{info}{pager}",
                bottom: ""
            },
            // scrollY:"300px;",
            // scrollX: true,
        });
    }


    if (datatablesSimple1) {
        new simpleDatatables.DataTable(datatablesSimple1, {
            perPageSelect: [5, 10, 20, 25, 50, 100, 500],
            perPage: 100,
            layout: {
                top: "{search}{select}{info}{pager}",
                bottom: ""
            },
        });
    }

    if (datatablesSimple2) {
        new simpleDatatables.DataTable(datatablesSimple2, {
            perPageSelect: [5, 10, 20, 25, 50, 100, 500],
            perPage: 100,
            layout: {
                top: "{search}{select}{info}{pager}",
                bottom: ""
            },
        });
    }


    if (datatablesSimple3) {
        new simpleDatatables.DataTable(datatablesSimple3, {
            perPageSelect: [5, 10, 20, 25, 50, 100, 500],
            perPage: 100,
            layout: {
                top: "{search}{select}{info}{pager}",
                bottom: ""
            },


        });
    }


    if (datatablesSimple4) {
        new simpleDatatables.DataTable(datatablesSimple4, {
            perPageSelect: [5, 10, 20, 25, 50, 100, 500],
            perPage: 100,
            layout: {
                top: "{search}{select}{info}{pager}",
                bottom: ""
            },


        });
    }

    if (datatablesSimple5) {
        new simpleDatatables.DataTable(datatablesSimple5, {
            perPageSelect: [5, 10, 20, 25, 50, 100, 500],
            perPage: 100,
            layout: {
                top: "{search}{select}{info}{pager}",
                bottom: ""
            },


        });
    }

    if (datatablesSimple6) {
        new simpleDatatables.DataTable(datatablesSimple6, {
            perPageSelect: [5, 10, 20, 25, 50, 100, 500],
            perPage: 10,
            layout: {
                top: "{search}{select}{info}{pager}",
                bottom: ""
            },


        });
    }

    if (datatablesSimple7) {
        new simpleDatatables.DataTable(datatablesSimple7, {
            perPageSelect: [5, 10, 20, 25, 50, 100, 500],
            perPage: 10,
            layout: {
                top: "{search}{select}{info}{pager}",
                bottom: ""
            },


        });
    }

    if (datatablesSimple8) {
        new simpleDatatables.DataTable(datatablesSimple8, {
            perPageSelect: [5, 10, 20, 25, 50, 100, 500],
            perPage: 10,
            layout: {
                top: "{search}{select}{info}{pager}",
                bottom: ""
            },


        });
    }

    if (datatablesSimple9) {
        new simpleDatatables.DataTable(datatablesSimple9, {
            perPageSelect: [5, 10, 20, 25, 50, 100, 500],
            perPage: 10,
            layout: {
                top: "{search}{select}{info}{pager}",
                bottom: ""
            },


        });
    }

    if (datatablesSimple10) {
        new simpleDatatables.DataTable(datatablesSimple10, {
            perPageSelect: [5, 10, 20, 25, 50, 100, 500],
            perPage: 10,
            layout: {
                top: "{search}{select}{info}{pager}",
                bottom: ""
            },
        });
    }

    $('.dataTable-selector').append(`<option value="100000000">All</option>`);
    $(".dataTable-selector option[value='100000000']").remove();
    $('.dataTable-selector').append(`<option value="100000000">All</option>`);

});