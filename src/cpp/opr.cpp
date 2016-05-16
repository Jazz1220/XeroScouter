#include <node.h>
#include <vector>
//#include "matrix.h"
//#include "mysql_connection.h"

namespace deathcode {

	using v8::Exception;
	using v8::FunctionCallbackInfo;
	using v8::Isolate;
	using v8::Local;
	using v8::Object;
	using v8::String;
	using v8::Value;

	void getOPR(const FunctionCallbackInfo<Value>& args) {
		Isolate* isolate = args.GetIsolate();

		if (args.Length() < 1) {
			isolate->ThrowException(Exception::TypeError(String::NewFromUtf8(isolate, "Wrong number of arguments")));
			return;
		}
		if(!args[0]->IsNumber()) {
			isolate->ThrowException(Exception::TypeError(String::NewFromUtf8(isolate, "Wrong arguments")));
		}


	}

	void Init(Local<Object> exports) {
		NODE_SET_METHOD(exports, "getOPR", getOPR);
	}

	NODE_MODULE(opr, Init)
}
