//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v13.16.1.0 (NJsonSchema v10.7.2.0 (Newtonsoft.Json v13.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------

import { Injectable } from '@angular/core';

/* tslint:disable */
/* eslint-disable */
// ReSharper disable InconsistentNaming

export class Client {
  private http: {
    fetch(url: RequestInfo, init?: RequestInit): Promise<Response>;
  };
  private baseUrl: string;
  protected jsonParseReviver: ((key: string, value: any) => any) | undefined =
    undefined;

  constructor(
    baseUrl?: string,
    http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }
  ) {
    this.http = http ? http : (window as any);
    this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : '';
  }

  /**
   * @return Success
   */
  taskAll(): Promise<TaskDto[]> {
    let url_ = this.baseUrl + '/api/task';
    url_ = url_.replace(/[?&]$/, '');

    let options_: RequestInit = {
      method: 'GET',
      headers: {
        Accept: 'text/plain',
      },
    };

    return this.http.fetch(url_, options_).then((_response: Response) => {
      return this.processTaskAll(_response);
    });
  }

  protected processTaskAll(response: Response): Promise<TaskDto[]> {
    const status = response.status;
    let _headers: any = {};
    if (response.headers && response.headers.forEach) {
      response.headers.forEach((v: any, k: any) => (_headers[k] = v));
    }
    if (status === 200) {
      return response.text().then((_responseText) => {
        let result200: any = null;
        let resultData200 =
          _responseText === ''
            ? null
            : JSON.parse(_responseText, this.jsonParseReviver);
        if (Array.isArray(resultData200)) {
          result200 = [] as any;
          for (let item of resultData200) result200!.push(TaskDto.fromJS(item));
        } else {
          result200 = <any>null;
        }
        return result200;
      });
    } else if (status !== 200 && status !== 204) {
      return response.text().then((_responseText) => {
        return throwException(
          'An unexpected server error occurred.',
          status,
          _responseText,
          _headers
        );
      });
    }
    return Promise.resolve<TaskDto[]>(null as any);
  }

  /**
   * @param body (optional)
   * @return Success
   */
  taskPOST(body: CreateTaskDto | undefined): Promise<TaskDto> {
    let url_ = this.baseUrl + '/api/task';
    url_ = url_.replace(/[?&]$/, '');

    const content_ = JSON.stringify(body);

    let options_: RequestInit = {
      body: content_,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'text/plain',
      },
    };

    return this.http.fetch(url_, options_).then((_response: Response) => {
      return this.processTaskPOST(_response);
    });
  }

  protected processTaskPOST(response: Response): Promise<TaskDto> {
    const status = response.status;
    let _headers: any = {};
    if (response.headers && response.headers.forEach) {
      response.headers.forEach((v: any, k: any) => (_headers[k] = v));
    }
    if (status === 200) {
      return response.text().then((_responseText) => {
        let result200: any = null;
        let resultData200 =
          _responseText === ''
            ? null
            : JSON.parse(_responseText, this.jsonParseReviver);
        result200 = TaskDto.fromJS(resultData200);
        return result200;
      });
    } else if (status !== 200 && status !== 204) {
      return response.text().then((_responseText) => {
        return throwException(
          'An unexpected server error occurred.',
          status,
          _responseText,
          _headers
        );
      });
    }
    return Promise.resolve<TaskDto>(null as any);
  }

  /**
   * @return Success
   */
  getHistory(): Promise<TaskDto[]> {
    let url_ = this.baseUrl + '/getHistory';
    url_ = url_.replace(/[?&]$/, '');

    let options_: RequestInit = {
      method: 'GET',
      headers: {
        Accept: 'text/plain',
      },
    };

    return this.http.fetch(url_, options_).then((_response: Response) => {
      return this.processGetHistory(_response);
    });
  }

  protected processGetHistory(response: Response): Promise<TaskDto[]> {
    const status = response.status;
    let _headers: any = {};
    if (response.headers && response.headers.forEach) {
      response.headers.forEach((v: any, k: any) => (_headers[k] = v));
    }
    if (status === 200) {
      return response.text().then((_responseText) => {
        let result200: any = null;
        let resultData200 =
          _responseText === ''
            ? null
            : JSON.parse(_responseText, this.jsonParseReviver);
        if (Array.isArray(resultData200)) {
          result200 = [] as any;
          for (let item of resultData200) result200!.push(TaskDto.fromJS(item));
        } else {
          result200 = <any>null;
        }
        return result200;
      });
    } else if (status !== 200 && status !== 204) {
      return response.text().then((_responseText) => {
        return throwException(
          'An unexpected server error occurred.',
          status,
          _responseText,
          _headers
        );
      });
    }
    return Promise.resolve<TaskDto[]>(null as any);
  }

  /**
   * @param body (optional)
   * @return Success
   */
  taskPUT(id: string, body: TaskDto | undefined): Promise<TaskDto> {
    let url_ = this.baseUrl + '/api/task/{id}';
    if (id === undefined || id === null)
      throw new Error("The parameter 'id' must be defined.");
    url_ = url_.replace('{id}', encodeURIComponent('' + id));
    url_ = url_.replace(/[?&]$/, '');

    const content_ = JSON.stringify(body);

    let options_: RequestInit = {
      body: content_,
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'text/plain',
      },
    };

    return this.http.fetch(url_, options_).then((_response: Response) => {
      return this.processTaskPUT(_response);
    });
  }

  protected processTaskPUT(response: Response): Promise<TaskDto> {
    const status = response.status;
    let _headers: any = {};
    if (response.headers && response.headers.forEach) {
      response.headers.forEach((v: any, k: any) => (_headers[k] = v));
    }
    if (status === 200) {
      return response.text().then((_responseText) => {
        let result200: any = null;
        let resultData200 =
          _responseText === ''
            ? null
            : JSON.parse(_responseText, this.jsonParseReviver);
        result200 = TaskDto.fromJS(resultData200);
        return result200;
      });
    } else if (status !== 200 && status !== 204) {
      return response.text().then((_responseText) => {
        return throwException(
          'An unexpected server error occurred.',
          status,
          _responseText,
          _headers
        );
      });
    }
    return Promise.resolve<TaskDto>(null as any);
  }
}

export class CreateTaskDto implements ICreateTaskDto {
  title?: string | undefined;
  description?: string | undefined;
  status?: STATUS;
  createdAt?: Date;
  taskTimeInMinutes?: number;
  targetCompletionDate?: Date;
  todoList?: TodoItemDto[] | undefined;

  constructor(data?: ICreateTaskDto) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.title = _data['title'];
      this.description = _data['description'];
      this.status = _data['status'];
      this.createdAt = _data['createdAt']
        ? new Date(_data['createdAt'].toString())
        : <any>undefined;
      this.taskTimeInMinutes = _data['taskTimeInMinutes'];
      this.targetCompletionDate = _data['targetCompletionDate']
        ? new Date(_data['targetCompletionDate'].toString())
        : <any>undefined;
      if (Array.isArray(_data['todoList'])) {
        this.todoList = [] as any;
        for (let item of _data['todoList'])
          this.todoList!.push(TodoItemDto.fromJS(item));
      }
    }
  }

  static fromJS(data: any): CreateTaskDto {
    data = typeof data === 'object' ? data : {};
    let result = new CreateTaskDto();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data['title'] = this.title;
    data['description'] = this.description;
    data['status'] = this.status;
    data['createdAt'] = this.createdAt
      ? this.createdAt.toISOString()
      : <any>undefined;
    data['taskTimeInMinutes'] = this.taskTimeInMinutes;
    data['targetCompletionDate'] = this.targetCompletionDate
      ? this.targetCompletionDate.toISOString()
      : <any>undefined;
    if (Array.isArray(this.todoList)) {
      data['todoList'] = [];
      for (let item of this.todoList) data['todoList'].push(item.toJSON());
    }
    return data;
  }
}

export interface ICreateTaskDto {
  title?: string | undefined;
  description?: string | undefined;
  status?: STATUS;
  createdAt?: Date;
  taskTimeInMinutes?: number;
  targetCompletionDate?: Date;
  todoList?: TodoItemDto[] | undefined;
}

export enum STATUS {
  _0 = 0,
  _1 = 1,
  _2 = 2,
  _3 = 3,
}

export class TaskDto implements ITaskDto {
  id?: string | undefined;
  title?: string | undefined;
  description?: string | undefined;
  status?: STATUS;
  createdAt?: Date;
  taskTimeInMinutes?: number;
  targetCompletionDate?: Date;
  todoList?: TodoItemDto[] | undefined;

  constructor(data?: ITaskDto) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.id = _data['id'];
      this.title = _data['title'];
      this.description = _data['description'];
      this.status = _data['status'];
      this.createdAt = _data['createdAt']
        ? new Date(_data['createdAt'].toString())
        : <any>undefined;
      this.taskTimeInMinutes = _data['taskTimeInMinutes'];
      this.targetCompletionDate = _data['targetCompletionDate']
        ? new Date(_data['targetCompletionDate'].toString())
        : <any>undefined;
      if (Array.isArray(_data['todoList'])) {
        this.todoList = [] as any;
        for (let item of _data['todoList'])
          this.todoList!.push(TodoItemDto.fromJS(item));
      }
    }
  }

  static fromJS(data: any): TaskDto {
    data = typeof data === 'object' ? data : {};
    let result = new TaskDto();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data['id'] = this.id;
    data['title'] = this.title;
    data['description'] = this.description;
    data['status'] = this.status;
    data['createdAt'] = this.createdAt
      ? this.createdAt.toISOString()
      : <any>undefined;
    data['taskTimeInMinutes'] = this.taskTimeInMinutes;
    data['targetCompletionDate'] = this.targetCompletionDate
      ? this.targetCompletionDate.toISOString()
      : <any>undefined;
    if (Array.isArray(this.todoList)) {
      data['todoList'] = [];
      for (let item of this.todoList) data['todoList'].push(item.toJSON());
    }
    return data;
  }
}

export interface ITaskDto {
  id?: string | undefined;
  title?: string | undefined;
  description?: string | undefined;
  status?: STATUS;
  createdAt?: Date;
  taskTimeInMinutes?: number;
  targetCompletionDate?: Date;
  todoList?: TodoItemDto[] | undefined;
}

export class TodoItemDto implements ITodoItemDto {
  id?: string | undefined;
  todoString?: string | undefined;
  isCompleted?: boolean;

  constructor(data?: ITodoItemDto) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.id = _data['id'];
      this.todoString = _data['todoString'];
      this.isCompleted = _data['isCompleted'];
    }
  }

  static fromJS(data: any): TodoItemDto {
    data = typeof data === 'object' ? data : {};
    let result = new TodoItemDto();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data['id'] = this.id;
    data['todoString'] = this.todoString;
    data['isCompleted'] = this.isCompleted;
    return data;
  }
}

export interface ITodoItemDto {
  id?: string | undefined;
  todoString?: string | undefined;
  isCompleted?: boolean;
}

export class ApiException extends Error {
  override message: string;
  status: number;
  response: string;
  headers: { [key: string]: any };
  result: any;

  constructor(
    message: string,
    status: number,
    response: string,
    headers: { [key: string]: any },
    result: any
  ) {
    super();

    this.message = message;
    this.status = status;
    this.response = response;
    this.headers = headers;
    this.result = result;
  }

  protected isApiException = true;

  static isApiException(obj: any): obj is ApiException {
    return obj.isApiException === true;
  }
}

function throwException(
  message: string,
  status: number,
  response: string,
  headers: { [key: string]: any },
  result?: any
): any {
  if (result !== null && result !== undefined) throw result;
  else throw new ApiException(message, status, response, headers, null);
}
