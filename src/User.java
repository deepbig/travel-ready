
public class User{
    private String userName, name, email, user_DOB, phone, address, password;
    private String destination, lodging, stay, transport;
    //setters and getters
    //link to login
//    public User() {
//        super();
//        this.userName = userName;
//        this.password = password;
//    }
    public String getUserName() { return userName;
        }
    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getName(){
        return name;
    }
    public void setName(String name){
        this.name = name;
    }

    public String getEmail(){
        return email;
    }
    public void setEmail(String email){
        this.email = email;
    }

    public String getUser_DOB(){
        return user_DOB;
    }
    public void setUser_DOB(String user_DOB){
        this.user_DOB = user_DOB;
    }

    public String getPhone(){
        return phone;
    }
    public void setPhone(String phone){
        this.phone = phone;
    }

    public String getAddress(){
        return address;
    }
    public void setAddress(String address){
        this.address = address;
    }

    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String toString() {
        return "User{" + "UserName=" + userName + ", Name=" + name +
                ", Date of Birth=" + user_DOB + ", Phone=" + phone + ", Address=" + address + ", Password=" + password + '}';
    }

    public boolean validateUserName(User realUser) {

        if(realUser.getUserName().equals(userName)){
            return true;
        }
        return false;
    }
    public boolean validatePW(User realPW) {
        if(realPW.getPassword().equals(password)){
            return true;
        }
        return false;
    }

    public String getDestination(){
        return destination;
    }
    public void setDestination(String destination){
        this.destination = destination;
    }

    public String getLodging(){
        return lodging;
    }
    public void setLodging(String lodging){
        this.lodging = lodging;
    }

    public String getStay(){
        return stay;
    }
    public void setStay(String stay){
        this.stay = stay;
    }

    public String getTransport(){
        return transport;
    }
    public void setTransport(String transport){
        this.transport = transport;
    }
}


