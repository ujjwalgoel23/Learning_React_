import {createAsyncThunk , createSlice} from '@redux/toolkit';

//createAsyncThunk creates automatically dispatch , so we cannot need to use dispatch() function 
const FetchData = createAsyncThunk(
    //Action: type + payload    
    //type=>
        'coin/fetch',
        
    async (args,thunkAPI)=>{ // thunkAPI dispatch wala kaam kr rha hai
        
        try{
          const response=await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${args}`);
          const data=response.json();
          return data; //return kra hua jata hai payload ke andar
        }
        catch(error){

           return rejectWithValue(error.message);
        }
    }
)


const slicer1= createSlice({
    name:"slice1",
    initialState:{data:[],loading:false,error:null},
    reducers:{},
    extraReducers: (builder)=>{
      builder
      .addCase(FetchData.pending , (state)=>{
        state.loading=true;
        state.error=null;
      })
      .addCase(FetchData.fulfilled,(state,action)=>{
        state.data=action.payload;
        state.loading=false;
      })
      .addCase(FetchData.rejected,(state,action)=>{
        state.error=action.playload;
        state.loading=false;
      }) 
    }

})