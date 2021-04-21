import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currentPage = 0;
  images = [
    {
      title: 'At the Beach',
      url:
        'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmVhY2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
    },
    {
      title: 'In the mountains',
      url:
        'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW91bnRhaW5zfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
    },
    {
      title: 'In the fields',
      url:
        'https://images.unsplash.com/photo-1498054807547-856424c739f2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZmllbGRzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
    },
    {
      title: 'In the city',
      url:
        'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2l0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
    },
    {
      title: 'At the Beach',
      url:
        'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmVhY2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
    },
    {
      title: 'In the mountains',
      url:
        'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW91bnRhaW5zfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
    },
    {
      title: 'In the fields',
      url:
        'https://images.unsplash.com/photo-1498054807547-856424c739f2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZmllbGRzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
    },
    {
      title: 'In the city',
      url:
        'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2l0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
    },
    {
      title: 'At the Beach',
      url:
        'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmVhY2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
    },
    {
      title: 'In the mountains',
      url:
        'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW91bnRhaW5zfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
    },
    {
      title: 'In the fields',
      url:
        'https://images.unsplash.com/photo-1498054807547-856424c739f2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZmllbGRzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
    },
    {
      title: 'In the city',
      url:
        'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2l0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
    },
    {
      title: 'At the Beach',
      url:
        'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmVhY2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
    },
    {
      title: 'In the mountains',
      url:
        'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW91bnRhaW5zfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
    },
    {
      title: 'In the fields',
      url:
        'https://images.unsplash.com/photo-1498054807547-856424c739f2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZmllbGRzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
    },
    {
      title: 'In the city',
      url:
        'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2l0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
    },
    {
      title: 'At the Beach',
      url:
        'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmVhY2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
    },
    {
      title: 'In the mountains',
      url:
        'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW91bnRhaW5zfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
    },
    {
      title: 'In the fields',
      url:
        'https://images.unsplash.com/photo-1498054807547-856424c739f2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZmllbGRzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
    },
    {
      title: 'In the city',
      url:
        'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2l0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
    },
  ];
  checkWindowIndex(index: number) {
    return Math.abs(this.currentPage - index) < 5;
  }
}
