package com.projectcatrer.modal;



import org.springframework.data.annotation.Id;



public class Catrer {
	@Id
	private String catererid;
    private String caterername;
    private String catererlocation;
    private String catererpassword;
    private String catererphone;
    private String catereraddress;
    private String caterercity;
    private String catererzip;
    private String catereremail;
    
	public Catrer() {
		super();
	}

	public Catrer(String catererid, String caterername, String catererlocation, String catererpassword,
			String catererphone, String catereraddress, String caterercity, String catererzip, String catereremail) {
		super();
		this.catererid = catererid;
		this.caterername = caterername;
		this.catererlocation = catererlocation;
		this.catererpassword = catererpassword;
		this.catererphone = catererphone;
		this.catereraddress = catereraddress;
		this.caterercity = caterercity;
		this.catererzip = catererzip;
		this.catereremail = catereremail;
	}

	public String getCatererid() {
		return catererid;
	}

	public void setCatererid(String catererid) {
		this.catererid = catererid;
	}

	public String getCaterername() {
		return caterername;
	}

	public void setCaterername(String caterername) {
		this.caterername = caterername;
	}

	public String getCatererlocation() {
		return catererlocation;
	}

	public void setCatererlocation(String catererlocation) {
		this.catererlocation = catererlocation;
	}

	public String getCatererpassword() {
		return catererpassword;
	}

	public void setCatererpassword(String catererpassword) {
		this.catererpassword = catererpassword;
	}

	public String getCatererphone() {
		return catererphone;
	}

	public void setCatererphone(String catererphone) {
		this.catererphone = catererphone;
	}

	public String getCatereraddress() {
		return catereraddress;
	}

	public void setCatereraddress(String catereraddress) {
		this.catereraddress = catereraddress;
	}

	public String getCaterercity() {
		return caterercity;
	}

	public void setCaterercity(String caterercity) {
		this.caterercity = caterercity;
	}

	public String getCatererzip() {
		return catererzip;
	}

	public void setCatererzip(String catererzip) {
		this.catererzip = catererzip;
	}

	public String getCatereremail() {
		return catereremail;
	}

	public void setCatereremail(String catereremail) {
		this.catereremail = catereremail;
	}
	
}