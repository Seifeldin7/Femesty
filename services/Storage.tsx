import * as SecureStore from "expo-secure-store";

export class Storage {

    static write =  async (key: string, value: string) => {
        try {
            await SecureStore.setItemAsync(key, value)
        } catch (error) {
            console.log('Failed to write to secure store with error: \n' + error)
        } 
        
    }

    static read = async (key: string) => {
        try {
            return SecureStore.getItemAsync(key);
        } catch (error) {
            console.log('Failed to read from secue store with error: \n' + error)
        }
    }

    static async delete(key: string)  {
        try {
            return await SecureStore.deleteItemAsync(key);
        } catch (error) {
            console.log('Failed to Delete item with key: ' + key + '\n with error: \n' + error);
        }
    }
}
