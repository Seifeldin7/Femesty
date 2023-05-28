import {Storage} from '../../services/Storage';
import * as SecureStore from "expo-secure-store";


jest.mock('expo-secure-store', () => ({
    setItemAsync: jest.fn(),
    getItemAsync: jest.fn(),
    deleteItemAsync: jest.fn()
}))

test('should write to the store', () => {
    expect(Storage.write('token', '123456')).toBeTruthy(); 
    expect(SecureStore.setItemAsync).toHaveBeenCalledTimes(1); 
    expect(SecureStore.setItemAsync).toBeCalledWith('token', '123456'); 
});


test('should read from the store', () => {
    expect(Storage.read('token')).toBeTruthy();
    expect(SecureStore.getItemAsync).toHaveBeenCalledTimes(1); 
    expect(SecureStore.getItemAsync).toBeCalledWith('token')
});


// describe('Read from store', () => {
//     it( "should read from the store with the same value", () => {
//         const data = ["token" , "123456" ];

//         Storage.write(data[0], data[1]);

//         const result = Storage.read(data[0]);
//         const expected = "123456";
//         expect(result).toBe("123456");
//     })
// });


test('should delete from the store if exist', () => {
    expect(Storage.delete('token')).toBeTruthy(); 
    expect(SecureStore.deleteItemAsync).toHaveBeenCalledTimes(1); 
    expect(SecureStore.deleteItemAsync).toBeCalledWith('token')
});
