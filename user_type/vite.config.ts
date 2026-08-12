import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({

    build:{
        rollupOptions:{
            input:{
                main:resolve(__dirname, 'index.html'),
                login:resolve(__dirname,"/src/pages/login/"),
                stock:resolve(__dirname,"/src/pages/stock/stock.html"),
                order:resolve(__dirname,"/src/pages/order/orderList.html")
            }
        },    
    },
});