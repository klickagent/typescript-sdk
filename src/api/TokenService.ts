'use strict';

import localVarRequest = require("request");
import http = require("http");
import Promise = require("bluebird");

import { Authentication } from '../auth/Authentication';
import { VoidAuth } from '../auth/VoidAuth';
import { ObjectSerializer } from '../serializers/ObjectSerializer';

import { Charge } from  '../models/Charge';
import { ClientError } from  '../models/ClientError';
import { EntityQuery } from  '../models/EntityQuery';
import { EntityQueryFilter } from  '../models/EntityQueryFilter';
import { ServerError } from  '../models/ServerError';
import { Token } from  '../models/Token';
import { TokenCreate } from  '../models/TokenCreate';
import { TokenUpdate } from  '../models/TokenUpdate';
import { TokenVersion } from  '../models/TokenVersion';
import { Transaction } from  '../models/Transaction';

class TokenService {
    protected _basePath = 'https://app-wallee.com:443/api';
    protected defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth({})
    };

    constructor(configuration: any) {
        this.setDefaultAuthentication(new VoidAuth(configuration))
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    get basePath() {
        return this._basePath;
    }

    protected setDefaultAuthentication(auth: Authentication) {
        this.authentications.default = auth;
    }

    /**
    * Deletes the entity with the given id.
    * @summary Delete
    * @param spaceId 
    * @param id 
    * @param {*} [options] Override http request options.
    */
    public _delete (spaceId: number, id: number, options: any = {}) : Promise<{ response: http.IncomingMessage; body?: any;  }> {
        const localVarPath = this.basePath + '/token/delete';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

            // verify required parameter 'spaceId' is not null or undefined
            if (spaceId === null || spaceId === undefined) {
                throw new Error('Required parameter spaceId was null or undefined when calling _delete.');
            }

            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling _delete.');
            }

        if (spaceId !== undefined) {
            localVarQueryParameters['spaceId'] = ObjectSerializer.serialize(spaceId, "number");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(id, "number"),
        };

        this.authentications.default.applyToRequest(localVarRequestOptions);

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body?: any;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    return reject(error);
                } else {
                    if (response.statusCode){
                        if (response.statusCode >= 200 && response.statusCode <= 299) {

                            return resolve({ response: response, body: body });
                        } else {
                            let errorObject: ClientError | ServerError;
                            if (response.statusCode >= 400 && response.statusCode <= 499) {
                                errorObject = new ClientError();
                            } else if (response.statusCode >= 500 && response.statusCode <= 599){
                                errorObject = new ServerError();
                            } else {
                                errorObject = new Object();
                            }
                            return reject({
                                errorType: errorObject.constructor.name,
                                date: (new Date()).toDateString(),
                                statusCode: <string> <any> response.statusCode,
                                statusMessage: response.statusMessage,
                                body: body,
                                response: response
                            });
                        }
                    }
                    return reject({
                        errorType: "Unknown",
                        date: (new Date()).toDateString(),
                        statusCode: "Unknown",
                        statusMessage: "Unknown",
                        body: body,
                        response: response
                    });

                }
            });
        });
    }
    /**
    * This operation checks if the given transaction can be used to create a token out of it.
    * @summary Check If Token Creation Is Possible
    * @param spaceId 
    * @param transactionId The id of the transaction for which we want to check if the token can be created or not.
    * @param {*} [options] Override http request options.
    */
    public checkTokenCreationPossible (spaceId: number, transactionId: number, options: any = {}) : Promise<{ response: http.IncomingMessage; body: boolean;  }> {
        const localVarPath = this.basePath + '/token/check-token-creation-possible';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

            // verify required parameter 'spaceId' is not null or undefined
            if (spaceId === null || spaceId === undefined) {
                throw new Error('Required parameter spaceId was null or undefined when calling checkTokenCreationPossible.');
            }

            // verify required parameter 'transactionId' is not null or undefined
            if (transactionId === null || transactionId === undefined) {
                throw new Error('Required parameter transactionId was null or undefined when calling checkTokenCreationPossible.');
            }

        if (spaceId !== undefined) {
            localVarQueryParameters['spaceId'] = ObjectSerializer.serialize(spaceId, "number");
        }

        if (transactionId !== undefined) {
            localVarQueryParameters['transactionId'] = ObjectSerializer.serialize(transactionId, "number");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.default.applyToRequest(localVarRequestOptions);

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: boolean;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    return reject(error);
                } else {
                    if (response.statusCode){
                        if (response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "boolean");
                            return resolve({ response: response, body: body });
                        } else {
                            let errorObject: ClientError | ServerError;
                            if (response.statusCode >= 400 && response.statusCode <= 499) {
                                errorObject = new ClientError();
                            } else if (response.statusCode >= 500 && response.statusCode <= 599){
                                errorObject = new ServerError();
                            } else {
                                errorObject = new Object();
                            }
                            return reject({
                                errorType: errorObject.constructor.name,
                                date: (new Date()).toDateString(),
                                statusCode: <string> <any> response.statusCode,
                                statusMessage: response.statusMessage,
                                body: body,
                                response: response
                            });
                        }
                    }
                    return reject({
                        errorType: "Unknown",
                        date: (new Date()).toDateString(),
                        statusCode: "Unknown",
                        statusMessage: "Unknown",
                        body: body,
                        response: response
                    });

                }
            });
        });
    }
    /**
    * Counts the number of items in the database as restricted by the given filter.
    * @summary Count
    * @param spaceId 
    * @param filter The filter which restricts the entities which are used to calculate the count.
    * @param {*} [options] Override http request options.
    */
    public count (spaceId: number, filter?: EntityQueryFilter, options: any = {}) : Promise<{ response: http.IncomingMessage; body: number;  }> {
        const localVarPath = this.basePath + '/token/count';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

            // verify required parameter 'spaceId' is not null or undefined
            if (spaceId === null || spaceId === undefined) {
                throw new Error('Required parameter spaceId was null or undefined when calling count.');
            }

        if (spaceId !== undefined) {
            localVarQueryParameters['spaceId'] = ObjectSerializer.serialize(spaceId, "number");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(filter, "EntityQueryFilter"),
        };

        this.authentications.default.applyToRequest(localVarRequestOptions);

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: number;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    return reject(error);
                } else {
                    if (response.statusCode){
                        if (response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "number");
                            return resolve({ response: response, body: body });
                        } else {
                            let errorObject: ClientError | ServerError;
                            if (response.statusCode >= 400 && response.statusCode <= 499) {
                                errorObject = new ClientError();
                            } else if (response.statusCode >= 500 && response.statusCode <= 599){
                                errorObject = new ServerError();
                            } else {
                                errorObject = new Object();
                            }
                            return reject({
                                errorType: errorObject.constructor.name,
                                date: (new Date()).toDateString(),
                                statusCode: <string> <any> response.statusCode,
                                statusMessage: response.statusMessage,
                                body: body,
                                response: response
                            });
                        }
                    }
                    return reject({
                        errorType: "Unknown",
                        date: (new Date()).toDateString(),
                        statusCode: "Unknown",
                        statusMessage: "Unknown",
                        body: body,
                        response: response
                    });

                }
            });
        });
    }
    /**
    * Creates the entity with the given properties.
    * @summary Create
    * @param spaceId 
    * @param entity The token object with the properties which should be created.
    * @param {*} [options] Override http request options.
    */
    public create (spaceId: number, entity: TokenCreate, options: any = {}) : Promise<{ response: http.IncomingMessage; body: Token;  }> {
        const localVarPath = this.basePath + '/token/create';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

            // verify required parameter 'spaceId' is not null or undefined
            if (spaceId === null || spaceId === undefined) {
                throw new Error('Required parameter spaceId was null or undefined when calling create.');
            }

            // verify required parameter 'entity' is not null or undefined
            if (entity === null || entity === undefined) {
                throw new Error('Required parameter entity was null or undefined when calling create.');
            }

        if (spaceId !== undefined) {
            localVarQueryParameters['spaceId'] = ObjectSerializer.serialize(spaceId, "number");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(entity, "TokenCreate"),
        };

        this.authentications.default.applyToRequest(localVarRequestOptions);

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: Token;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    return reject(error);
                } else {
                    if (response.statusCode){
                        if (response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "Token");
                            return resolve({ response: response, body: body });
                        } else {
                            let errorObject: ClientError | ServerError;
                            if (response.statusCode >= 400 && response.statusCode <= 499) {
                                errorObject = new ClientError();
                            } else if (response.statusCode >= 500 && response.statusCode <= 599){
                                errorObject = new ServerError();
                            } else {
                                errorObject = new Object();
                            }
                            return reject({
                                errorType: errorObject.constructor.name,
                                date: (new Date()).toDateString(),
                                statusCode: <string> <any> response.statusCode,
                                statusMessage: response.statusMessage,
                                body: body,
                                response: response
                            });
                        }
                    }
                    return reject({
                        errorType: "Unknown",
                        date: (new Date()).toDateString(),
                        statusCode: "Unknown",
                        statusMessage: "Unknown",
                        body: body,
                        response: response
                    });

                }
            });
        });
    }
    /**
    * This operation creates a token for the given transaction and fills it with the stored payment information of the transaction.
    * @summary Create Token Based On Transaction
    * @param spaceId 
    * @param transactionId The id of the transaction for which we want to create the token.
    * @param {*} [options] Override http request options.
    */
    public createTokenBasedOnTransaction (spaceId: number, transactionId: number, options: any = {}) : Promise<{ response: http.IncomingMessage; body: TokenVersion;  }> {
        const localVarPath = this.basePath + '/token/create-token-based-on-transaction';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

            // verify required parameter 'spaceId' is not null or undefined
            if (spaceId === null || spaceId === undefined) {
                throw new Error('Required parameter spaceId was null or undefined when calling createTokenBasedOnTransaction.');
            }

            // verify required parameter 'transactionId' is not null or undefined
            if (transactionId === null || transactionId === undefined) {
                throw new Error('Required parameter transactionId was null or undefined when calling createTokenBasedOnTransaction.');
            }

        if (spaceId !== undefined) {
            localVarQueryParameters['spaceId'] = ObjectSerializer.serialize(spaceId, "number");
        }

        if (transactionId !== undefined) {
            localVarQueryParameters['transactionId'] = ObjectSerializer.serialize(transactionId, "number");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.default.applyToRequest(localVarRequestOptions);

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: TokenVersion;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    return reject(error);
                } else {
                    if (response.statusCode){
                        if (response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "TokenVersion");
                            return resolve({ response: response, body: body });
                        } else {
                            let errorObject: ClientError | ServerError;
                            if (response.statusCode >= 400 && response.statusCode <= 499) {
                                errorObject = new ClientError();
                            } else if (response.statusCode >= 500 && response.statusCode <= 599){
                                errorObject = new ServerError();
                            } else {
                                errorObject = new Object();
                            }
                            return reject({
                                errorType: errorObject.constructor.name,
                                date: (new Date()).toDateString(),
                                statusCode: <string> <any> response.statusCode,
                                statusMessage: response.statusMessage,
                                body: body,
                                response: response
                            });
                        }
                    }
                    return reject({
                        errorType: "Unknown",
                        date: (new Date()).toDateString(),
                        statusCode: "Unknown",
                        statusMessage: "Unknown",
                        body: body,
                        response: response
                    });

                }
            });
        });
    }
    /**
    * This operation creates a transaction which allows the updating of the provided token.
    * @summary Create Transaction for Token Update
    * @param spaceId 
    * @param tokenId The id of the token which should be updated.
    * @param {*} [options] Override http request options.
    */
    public createTransactionForTokenUpdate (spaceId: number, tokenId: number, options: any = {}) : Promise<{ response: http.IncomingMessage; body: Transaction;  }> {
        const localVarPath = this.basePath + '/token/createTransactionForTokenUpdate';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

            // verify required parameter 'spaceId' is not null or undefined
            if (spaceId === null || spaceId === undefined) {
                throw new Error('Required parameter spaceId was null or undefined when calling createTransactionForTokenUpdate.');
            }

            // verify required parameter 'tokenId' is not null or undefined
            if (tokenId === null || tokenId === undefined) {
                throw new Error('Required parameter tokenId was null or undefined when calling createTransactionForTokenUpdate.');
            }

        if (spaceId !== undefined) {
            localVarQueryParameters['spaceId'] = ObjectSerializer.serialize(spaceId, "number");
        }

        if (tokenId !== undefined) {
            localVarQueryParameters['tokenId'] = ObjectSerializer.serialize(tokenId, "number");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.default.applyToRequest(localVarRequestOptions);

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: Transaction;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    return reject(error);
                } else {
                    if (response.statusCode){
                        if (response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "Transaction");
                            return resolve({ response: response, body: body });
                        } else {
                            let errorObject: ClientError | ServerError;
                            if (response.statusCode >= 400 && response.statusCode <= 499) {
                                errorObject = new ClientError();
                            } else if (response.statusCode >= 500 && response.statusCode <= 599){
                                errorObject = new ServerError();
                            } else {
                                errorObject = new Object();
                            }
                            return reject({
                                errorType: errorObject.constructor.name,
                                date: (new Date()).toDateString(),
                                statusCode: <string> <any> response.statusCode,
                                statusMessage: response.statusMessage,
                                body: body,
                                response: response
                            });
                        }
                    }
                    return reject({
                        errorType: "Unknown",
                        date: (new Date()).toDateString(),
                        statusCode: "Unknown",
                        statusMessage: "Unknown",
                        body: body,
                        response: response
                    });

                }
            });
        });
    }
    /**
    * This operation processes the given transaction by using the token associated with the transaction.
    * @summary Process Transaction
    * @param spaceId 
    * @param transactionId The id of the transaction for which we want to check if the token can be created or not.
    * @param {*} [options] Override http request options.
    */
    public processTransaction (spaceId: number, transactionId: number, options: any = {}) : Promise<{ response: http.IncomingMessage; body: Charge;  }> {
        const localVarPath = this.basePath + '/token/process-transaction';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

            // verify required parameter 'spaceId' is not null or undefined
            if (spaceId === null || spaceId === undefined) {
                throw new Error('Required parameter spaceId was null or undefined when calling processTransaction.');
            }

            // verify required parameter 'transactionId' is not null or undefined
            if (transactionId === null || transactionId === undefined) {
                throw new Error('Required parameter transactionId was null or undefined when calling processTransaction.');
            }

        if (spaceId !== undefined) {
            localVarQueryParameters['spaceId'] = ObjectSerializer.serialize(spaceId, "number");
        }

        if (transactionId !== undefined) {
            localVarQueryParameters['transactionId'] = ObjectSerializer.serialize(transactionId, "number");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.default.applyToRequest(localVarRequestOptions);

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: Charge;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    return reject(error);
                } else {
                    if (response.statusCode){
                        if (response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "Charge");
                            return resolve({ response: response, body: body });
                        } else {
                            let errorObject: ClientError | ServerError;
                            if (response.statusCode >= 400 && response.statusCode <= 499) {
                                errorObject = new ClientError();
                            } else if (response.statusCode >= 500 && response.statusCode <= 599){
                                errorObject = new ServerError();
                            } else {
                                errorObject = new Object();
                            }
                            return reject({
                                errorType: errorObject.constructor.name,
                                date: (new Date()).toDateString(),
                                statusCode: <string> <any> response.statusCode,
                                statusMessage: response.statusMessage,
                                body: body,
                                response: response
                            });
                        }
                    }
                    return reject({
                        errorType: "Unknown",
                        date: (new Date()).toDateString(),
                        statusCode: "Unknown",
                        statusMessage: "Unknown",
                        body: body,
                        response: response
                    });

                }
            });
        });
    }
    /**
    * Reads the entity with the given 'id' and returns it.
    * @summary Read
    * @param spaceId 
    * @param id The id of the token which should be returned.
    * @param {*} [options] Override http request options.
    */
    public read (spaceId: number, id: number, options: any = {}) : Promise<{ response: http.IncomingMessage; body: Token;  }> {
        const localVarPath = this.basePath + '/token/read';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

            // verify required parameter 'spaceId' is not null or undefined
            if (spaceId === null || spaceId === undefined) {
                throw new Error('Required parameter spaceId was null or undefined when calling read.');
            }

            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling read.');
            }

        if (spaceId !== undefined) {
            localVarQueryParameters['spaceId'] = ObjectSerializer.serialize(spaceId, "number");
        }

        if (id !== undefined) {
            localVarQueryParameters['id'] = ObjectSerializer.serialize(id, "number");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.default.applyToRequest(localVarRequestOptions);

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: Token;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    return reject(error);
                } else {
                    if (response.statusCode){
                        if (response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "Token");
                            return resolve({ response: response, body: body });
                        } else {
                            let errorObject: ClientError | ServerError;
                            if (response.statusCode >= 400 && response.statusCode <= 499) {
                                errorObject = new ClientError();
                            } else if (response.statusCode >= 500 && response.statusCode <= 599){
                                errorObject = new ServerError();
                            } else {
                                errorObject = new Object();
                            }
                            return reject({
                                errorType: errorObject.constructor.name,
                                date: (new Date()).toDateString(),
                                statusCode: <string> <any> response.statusCode,
                                statusMessage: response.statusMessage,
                                body: body,
                                response: response
                            });
                        }
                    }
                    return reject({
                        errorType: "Unknown",
                        date: (new Date()).toDateString(),
                        statusCode: "Unknown",
                        statusMessage: "Unknown",
                        body: body,
                        response: response
                    });

                }
            });
        });
    }
    /**
    * Searches for the entities as specified by the given query.
    * @summary Search
    * @param spaceId 
    * @param query The query restricts the tokens which are returned by the search.
    * @param {*} [options] Override http request options.
    */
    public search (spaceId: number, query: EntityQuery, options: any = {}) : Promise<{ response: http.IncomingMessage; body: Array<Token>;  }> {
        const localVarPath = this.basePath + '/token/search';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

            // verify required parameter 'spaceId' is not null or undefined
            if (spaceId === null || spaceId === undefined) {
                throw new Error('Required parameter spaceId was null or undefined when calling search.');
            }

            // verify required parameter 'query' is not null or undefined
            if (query === null || query === undefined) {
                throw new Error('Required parameter query was null or undefined when calling search.');
            }

        if (spaceId !== undefined) {
            localVarQueryParameters['spaceId'] = ObjectSerializer.serialize(spaceId, "number");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(query, "EntityQuery"),
        };

        this.authentications.default.applyToRequest(localVarRequestOptions);

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: Array<Token>;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    return reject(error);
                } else {
                    if (response.statusCode){
                        if (response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "Array<Token>");
                            return resolve({ response: response, body: body });
                        } else {
                            let errorObject: ClientError | ServerError;
                            if (response.statusCode >= 400 && response.statusCode <= 499) {
                                errorObject = new ClientError();
                            } else if (response.statusCode >= 500 && response.statusCode <= 599){
                                errorObject = new ServerError();
                            } else {
                                errorObject = new Object();
                            }
                            return reject({
                                errorType: errorObject.constructor.name,
                                date: (new Date()).toDateString(),
                                statusCode: <string> <any> response.statusCode,
                                statusMessage: response.statusMessage,
                                body: body,
                                response: response
                            });
                        }
                    }
                    return reject({
                        errorType: "Unknown",
                        date: (new Date()).toDateString(),
                        statusCode: "Unknown",
                        statusMessage: "Unknown",
                        body: body,
                        response: response
                    });

                }
            });
        });
    }
    /**
    * This updates the entity with the given properties. Only those properties which should be updated can be provided. The 'id' and 'version' are required to identify the entity.
    * @summary Update
    * @param spaceId 
    * @param entity The object with all the properties which should be updated. The id and the version are required properties.
    * @param {*} [options] Override http request options.
    */
    public update (spaceId: number, entity: TokenUpdate, options: any = {}) : Promise<{ response: http.IncomingMessage; body: Token;  }> {
        const localVarPath = this.basePath + '/token/update';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

            // verify required parameter 'spaceId' is not null or undefined
            if (spaceId === null || spaceId === undefined) {
                throw new Error('Required parameter spaceId was null or undefined when calling update.');
            }

            // verify required parameter 'entity' is not null or undefined
            if (entity === null || entity === undefined) {
                throw new Error('Required parameter entity was null or undefined when calling update.');
            }

        if (spaceId !== undefined) {
            localVarQueryParameters['spaceId'] = ObjectSerializer.serialize(spaceId, "number");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(entity, "TokenUpdate"),
        };

        this.authentications.default.applyToRequest(localVarRequestOptions);

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: Token;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    return reject(error);
                } else {
                    if (response.statusCode){
                        if (response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "Token");
                            return resolve({ response: response, body: body });
                        } else {
                            let errorObject: ClientError | ServerError;
                            if (response.statusCode >= 400 && response.statusCode <= 499) {
                                errorObject = new ClientError();
                            } else if (response.statusCode >= 500 && response.statusCode <= 599){
                                errorObject = new ServerError();
                            } else {
                                errorObject = new Object();
                            }
                            return reject({
                                errorType: errorObject.constructor.name,
                                date: (new Date()).toDateString(),
                                statusCode: <string> <any> response.statusCode,
                                statusMessage: response.statusMessage,
                                body: body,
                                response: response
                            });
                        }
                    }
                    return reject({
                        errorType: "Unknown",
                        date: (new Date()).toDateString(),
                        statusCode: "Unknown",
                        statusMessage: "Unknown",
                        body: body,
                        response: response
                    });

                }
            });
        });
    }
}

export { TokenService }
