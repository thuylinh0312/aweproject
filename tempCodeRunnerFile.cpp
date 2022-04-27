#include <iostream>

using namespace std;

class Customer {
private:
	int id;
	string name;
	int discount;

public:
	Customer() {

	}
	Customer(int id, string name, int discount) {
		this->id = id;
		this->name = name;
		this->discount = discount;
	}

	int getId() {
		return id;
	}

	string getName() {
		return name;
	}

	void setName(string name) {
		this->name = name;
	}

	int getDiscount() {
		return discount;
	}

	void setDiscount(int discount) {
		this->discount = discount;
	}
};
class Invoice {
private:
	int id;
	Customer customer;
	double amount;

public:
	Invoice(int id, Customer customer, double amount) {
		this->id = id;
		this->customer = customer;
		this->amount = amount;
	}

	int getId() {
		return id;
	}

	Customer getCustomer() {
		return customer;
	}

	void setCustomer(Customer customer) {
		this->customer = customer;
	}

	double getAmount() {
		return amount;
	}

	void setAmount(double amount) {
		this->amount = amount;
	}

	string getCustomerName() {
		return customer.getName();
	}

	double getAmountAfterDiscount() {
		return amount - amount * customer.getDiscount() / 100;
	}
};	
int main() {
	Customer customer1(1000, "Tham", 20);
	Invoice invoice1(1000, customer1, 100000);
	cout << "Customer name: " << invoice1.getCustomerName() << endl;
	cout << "Invoice after discount: " << invoice1.getAmountAfterDiscount() << endl;

	return 0;
}
