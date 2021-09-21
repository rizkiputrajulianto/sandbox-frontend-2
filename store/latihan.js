export const state = () => {
 return { listData : [], jumlahData : []}
}

export const actions = {
    setData({commit}, listData){
        commit("ngesetData", listData);
    },
    setJumlah({commit}, jumlahData){
        commit("ngesetJumlah", jumlahData);
    }
}

export const mutations = {
    ngesetData(state, data){
        state.listData = data;
    },
    ngesetJumlah(state, jumlah){
        state.jumlahData.push(jumlah);
    }
}