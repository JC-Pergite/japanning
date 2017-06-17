/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as import0 from './city-details.component.css.shim.ngstyle';
import * as import1 from '@angular/core';
import * as import2 from '@angular/common';
import * as import3 from './safe-youtube.pipe';
import * as import4 from '@angular/platform-browser';
import * as import5 from '../current-agenda/current-agenda.component.ngfactory';
import * as import6 from '../current-agenda/current-agenda.component';
import * as import7 from '../agenda/agenda.service';
import * as import8 from './city-details.component';
import * as import9 from '@angular/router';
const styles_CityDetailsComponent:any[] = [import0.styles];
export const RenderType_CityDetailsComponent:import1.RendererType2 = import1.ɵcrt({
  encapsulation: 0,
  styles: styles_CityDetailsComponent,
  data: {}
}
);
function View_CityDetailsComponent_2(l:any):import1.ɵViewDefinition {
  return import1.ɵvid(0,[
      (l()(),import1.ɵeld(0,(null as any),(null as any),4,'div',[[
        'class',
        'list-group planList'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n              '])),
    (l()(),import1.ɵeld(0,(null as any),(null as any),1,'button',[
      [
        'class',
        'list-group-item'
      ]
      ,
      [
        'type',
        'button'
      ]

    ]
      ,(null as any),[[
        (null as any),
        'click'
      ]
    ],(v,en,$event) => {
      var ad:boolean = true;
      var co:any = v.component;
      if (('click' === en)) {
        const pd_0:any = ((<any>co.showDetails(v.context.$implicit)) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),[
      '\n                ',
      '\n              '
    ]
    )),
    (l()(),import1.ɵted((null as any),[' \n           ']))
  ]
  ,(null as any),(ck,v) => {
    const currVal_0:any = v.context.$implicit.name;
    ck(v,3,0,currVal_0);
  });
}
function View_CityDetailsComponent_3(l:any):import1.ɵViewDefinition {
  return import1.ɵvid(0,[
      (l()(),import1.ɵeld(0,(null as any),(null as any),5,'div',[[
        'class',
        'cityVid'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n             '])),
    (l()(),import1.ɵeld(0,(null as any),(null as any),2,'iframe',[
      [
        'allowfullscreen',
        ''
      ]
      ,
      [
        'class',
        'embed-responsive-item preview'
      ]
      ,
      [
        'id',
        '#frame'
      ]

    ]
      ,[[
        8,
        'src',
        5
      ]
    ],(null as any),(null as any),(null as any),(null as any))),
    import1.ɵppd(1),
    (l()(),import1.ɵted((null as any),['\n             '])),
    (l()(),import1.ɵted((null as any),['\n           ']))
  ]
  ,(null as any),(ck,v) => {
    const currVal_0:any = import1.ɵunv(v,2,0,ck(v,3,0,import1.ɵnov((<any>(<any>v.parent).parent),0),(<any>v.parent).context.$implicit.url));
    ck(v,2,0,currVal_0);
  });
}
function View_CityDetailsComponent_5(l:any):import1.ɵViewDefinition {
  return import1.ɵvid(0,[
    (l()(),import1.ɵeld(0,(null as any),(null as any),10,'div',[
      [
        'class',
        'noDay alert alert-danger alert-dismissible'
      ]
      ,
      [
        'role',
        'alert'
      ]

    ]
    ,(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n                 '])),
    (l()(),import1.ɵeld(0,(null as any),(null as any),4,'button',[
      [
        'aria-label',
        'Close'
      ]
      ,
      [
        'class',
        'close'
      ]
      ,
      [
        'data-dismiss',
        'alert'
      ]
      ,
      [
        'type',
        'button'
      ]

    ]
    ,(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n                  '])),
      (l()(),import1.ɵeld(0,(null as any),(null as any),1,'span',[[
        'aria-hidden',
        'true'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['×'])),
    (l()(),import1.ɵted((null as any),['\n                 '])),
    (l()(),import1.ɵted((null as any),['\n                  '])),
    (l()(),import1.ɵeld(0,(null as any),(null as any),1,'strong',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['Woops!'])),
    (l()(),import1.ɵted((null as any),[' Please create or select a day first.\n               ']))
  ]
  ,(null as any),(null as any));
}
function View_CityDetailsComponent_4(l:any):import1.ɵViewDefinition {
  return import1.ɵvid(0,[
      (l()(),import1.ɵeld(0,(null as any),(null as any),34,'div',[[
        'class',
        'contenido'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n             '])),
      (l()(),import1.ɵeld(0,(null as any),(null as any),4,'div',[[
        'class',
        'titleContainer'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n               '])),
      (l()(),import1.ɵeld(0,(null as any),(null as any),1,'h3',[[
        'class',
        'cityTitle'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),[
      '',
      ''
    ]
    )),
    (l()(),import1.ɵted((null as any),['\n             '])),
    (l()(),import1.ɵted((null as any),[' \n             '])),
    (l()(),import1.ɵeld(0,(null as any),(null as any),7,'div',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n               '])),
    (l()(),import1.ɵeld(0,(null as any),(null as any),1,'button',[
      [
        'class',
        'btn btn-success btn-large addEvent'
      ]
      ,
      [
        'type',
        'button'
      ]

    ]
      ,(null as any),[[
        (null as any),
        'click'
      ]
    ],(v,en,$event) => {
      var ad:boolean = true;
      var co:any = v.component;
      if (('click' === en)) {
        const pd_0:any = ((<any>co.getPlan(co.event)) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n                  Add Plan\n               '])),
    (l()(),import1.ɵted((null as any),['\n               '])),
    (l()(),import1.ɵand(16777216,(null as any),(null as any),1,(null as any),View_CityDetailsComponent_5)),
    import1.ɵdid(16384,(null as any),0,import2.NgIf,[
      import1.ViewContainerRef,
      import1.TemplateRef
    ]
      ,{ngIf: [
        0,
        'ngIf'
      ]
    },(null as any)),
    (l()(),import1.ɵted((null as any),['\n             '])),
    (l()(),import1.ɵted((null as any),['\n        	   '])),
      (l()(),import1.ɵeld(0,(null as any),(null as any),4,'div',[[
        'class',
        'describe'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n        	     '])),
    (l()(),import1.ɵeld(0,(null as any),(null as any),1,'p',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),[
      '',
      ''
    ]
    )),
    (l()(),import1.ɵted((null as any),['\n        	   '])),
    (l()(),import1.ɵted((null as any),['\n        	   '])),
      (l()(),import1.ɵeld(0,(null as any),(null as any),3,'div',[[
        'class',
        'foto'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n        	     '])),
    (l()(),import1.ɵeld(0,(null as any),(null as any),0,'img',[
      [
        'alt',
        'Responsive image'
      ]
      ,
      [
        'class',
        'img-responsive'
      ]
      ,
      [
        'height',
        '420'
      ]
      ,
      [
        'width',
        '420'
      ]

    ]
      ,[[
        8,
        'src',
        4
      ]
    ],(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n        	   '])),
    (l()(),import1.ɵted((null as any),['\n             '])),
      (l()(),import1.ɵeld(0,(null as any),(null as any),5,'div',[[
        'class',
        'embed-responsive embed-responsive-4by3 eventVid'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n               '])),
    (l()(),import1.ɵeld(0,(null as any),(null as any),2,'iframe',[
      [
        'allowfullscreen',
        ''
      ]
      ,
      [
        'class',
        'embed-responsive-item'
      ]

    ]
      ,[[
        8,
        'src',
        5
      ]
    ],(null as any),(null as any),(null as any),(null as any))),
    import1.ɵppd(1),
    (l()(),import1.ɵted((null as any),['\n               '])),
    (l()(),import1.ɵted((null as any),['\n             '])),
    (l()(),import1.ɵted((null as any),['\n          ']))
  ]
  ,(ck,v) => {
    const currVal_1:any = import1.ɵnov((<any>(<any>v.parent).parent),9).noDay;
    ck(v,14,0,currVal_1);
  },(ck,v) => {
    var co:any = v.component;
    const currVal_0:any = co.event.name;
    ck(v,5,0,currVal_0);
    const currVal_2:any = co.event.description;
    ck(v,20,0,currVal_2);
    const currVal_3:any = import1.ɵinlineInterpolate(1,'',co.event.pic,'');
    ck(v,25,0,currVal_3);
    const currVal_4:any = import1.ɵunv(v,30,0,ck(v,31,0,import1.ɵnov((<any>(<any>v.parent).parent),0),co.event.url));
    ck(v,30,0,currVal_4);
  });
}
function View_CityDetailsComponent_1(l:any):import1.ɵViewDefinition {
  return import1.ɵvid(0,[
      (l()(),import1.ɵeld(0,(null as any),(null as any),16,'div',[[
        'class',
        'panel-heading'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n         '])),
      (l()(),import1.ɵeld(0,(null as any),(null as any),1,'h1',[[
        'class',
        'neon'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),[
      '',
      ''
    ]
    )),
    (l()(),import1.ɵted((null as any),['\n         '])),
    (l()(),import1.ɵeld(0,(null as any),(null as any),10,'div',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n           '])),
    (l()(),import1.ɵand(16777216,(null as any),(null as any),1,(null as any),View_CityDetailsComponent_2)),
    import1.ɵdid(802816,(null as any),0,import2.NgForOf,[
      import1.ViewContainerRef,
      import1.TemplateRef,
      import1.IterableDiffers
    ]
      ,{ngForOf: [
        0,
        'ngForOf'
      ]
    },(null as any)),
    (l()(),import1.ɵted((null as any),['\n           '])),
    (l()(),import1.ɵand(16777216,(null as any),(null as any),1,(null as any),View_CityDetailsComponent_3)),
    import1.ɵdid(16384,(null as any),0,import2.NgIf,[
      import1.ViewContainerRef,
      import1.TemplateRef
    ]
      ,{ngIf: [
        0,
        'ngIf'
      ]
    },(null as any)),
    (l()(),import1.ɵted((null as any),['\n           '])),
    (l()(),import1.ɵand(16777216,(null as any),(null as any),1,(null as any),View_CityDetailsComponent_4)),
    import1.ɵdid(16384,(null as any),0,import2.NgIf,[
      import1.ViewContainerRef,
      import1.TemplateRef
    ]
      ,{ngIf: [
        0,
        'ngIf'
      ]
    },(null as any)),
    (l()(),import1.ɵted((null as any),['		\n        '])),
    (l()(),import1.ɵted((null as any),['\n       ']))
  ]
  ,(ck,v) => {
    var co:any = v.component;
    const currVal_1:any = ((v.context.$implicit == null)? (null as any): v.context.$implicit.plans);
    ck(v,8,0,currVal_1);
    const currVal_2:any = co.notYet;
    ck(v,11,0,currVal_2);
    const currVal_3:any = co.planClicked;
    ck(v,14,0,currVal_3);
  },(ck,v) => {
    const currVal_0:any = v.context.$implicit.name;
    ck(v,3,0,currVal_0);
  });
}
export function View_CityDetailsComponent_0(l:any):import1.ɵViewDefinition {
  return import1.ɵvid(0,[
    import1.ɵpid(0,import3.SafeYoutubePipe,[import4.DomSanitizer]),
    import1.ɵqud(402653184,1,{current: 0}),
    (l()(),import1.ɵted((null as any),['\n		'])),
    (l()(),import1.ɵeld(0,(null as any),(null as any),7,'div',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n		   '])),
    (l()(),import1.ɵand(16777216,(null as any),(null as any),1,(null as any),View_CityDetailsComponent_1)),
    import1.ɵdid(802816,(null as any),0,import2.NgForOf,[
      import1.ViewContainerRef,
      import1.TemplateRef,
      import1.IterableDiffers
    ]
      ,{ngForOf: [
        0,
        'ngForOf'
      ]
    },(null as any)),
    (l()(),import1.ɵted((null as any),['\n      '])),
    (l()(),import1.ɵeld(0,(null as any),(null as any),1,'app-current-agenda',([] as any[]),(null as any),(null as any),(null as any),import5.View_CurrentAgendaComponent_0,import5.RenderType_CurrentAgendaComponent)),
    import1.ɵdid(245760,[
      [
        1,
        4
      ]
      ,
      [
        'currently',
        4
      ]

    ]
    ,0,import6.CurrentAgendaComponent,[import7.AgendaService],(null as any),(null as any)),
    (l()(),import1.ɵted((null as any),['\n    '])),
    (l()(),import1.ɵted((null as any),[' \n	']))
  ]
  ,(ck,v) => {
    var co:import8.CityDetailsComponent = v.component;
    const currVal_0:any = co.city;
    ck(v,6,0,currVal_0);
    ck(v,9,0);
  },(null as any));
}
function View_CityDetailsComponent_Host_0(l:any):import1.ɵViewDefinition {
  return import1.ɵvid(0,[
    (l()(),import1.ɵeld(0,(null as any),(null as any),1,'app-city-details',([] as any[]),(null as any),(null as any),(null as any),View_CityDetailsComponent_0,RenderType_CityDetailsComponent)),
    import1.ɵdid(114688,(null as any),0,import8.CityDetailsComponent,[import9.ActivatedRoute],(null as any),(null as any))
  ]
  ,(ck,v) => {
    ck(v,1,0);
  },(null as any));
}
export const CityDetailsComponentNgFactory:import1.ComponentFactory<import8.CityDetailsComponent> = import1.ɵccf('app-city-details',import8.CityDetailsComponent,View_CityDetailsComponent_Host_0,{plan: 'plan'},{onAdded: 'onAdded'},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1VzZXJzL2pvc3VlX2MwMC9jb2RlL2phcGFubmluZy9qYXBhbm5pbmcvc3JjL2FwcC9jaXR5L2NpdHktZGV0YWlscy5jb21wb25lbnQubmdmYWN0b3J5LnRzIiwidmVyc2lvbiI6Mywic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmc6Ly8vVXNlcnMvam9zdWVfYzAwL2NvZGUvamFwYW5uaW5nL2phcGFubmluZy9zcmMvYXBwL2NpdHkvY2l0eS1kZXRhaWxzLmNvbXBvbmVudC50cyIsIm5nOi8vL1VzZXJzL2pvc3VlX2MwMC9jb2RlL2phcGFubmluZy9qYXBhbm5pbmcvc3JjL2FwcC9jaXR5L2NpdHktZGV0YWlscy5jb21wb25lbnQudHMuQ2l0eURldGFpbHNDb21wb25lbnQuaHRtbCIsIm5nOi8vL1VzZXJzL2pvc3VlX2MwMC9jb2RlL2phcGFubmluZy9qYXBhbm5pbmcvc3JjL2FwcC9jaXR5L2NpdHktZGV0YWlscy5jb21wb25lbnQudHMuQ2l0eURldGFpbHNDb21wb25lbnRfSG9zdC5odG1sIl0sInNvdXJjZXNDb250ZW50IjpbIiAiLCJcblx0XHQ8ZGl2PlxuXHRcdCAgIDxkaXYgY2xhc3M9XCJwYW5lbC1oZWFkaW5nXCIgKm5nRm9yPVwibGV0IHBsYWNlIG9mIGNpdHlcIj5cbiAgICAgICAgIDxoMSBjbGFzcz1cIm5lb25cIj57e3BsYWNlLm5hbWV9fTwvaDE+XG4gICAgICAgICA8ZGl2PlxuICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGlzdC1ncm91cCBwbGFuTGlzdFwiICpuZ0Zvcj1cImxldCBldmVudCBvZiBwbGFjZT8ucGxhbnNcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW1cIiAoY2xpY2spPVwic2hvd0RldGFpbHMoZXZlbnQpXCI+XG4gICAgICAgICAgICAgICAge3tldmVudC5uYW1lfX1cbiAgICAgICAgICAgICAgPC9idXR0b24+IFxuICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgPGRpdiAqbmdJZj1cIm5vdFlldFwiIGNsYXNzPVwiY2l0eVZpZFwiPlxuICAgICAgICAgICAgIDxpZnJhbWUgY2xhc3M9XCJlbWJlZC1yZXNwb25zaXZlLWl0ZW0gcHJldmlld1wiIGlkPVwiI2ZyYW1lXCJcbiAgICAgICAgICAgICAgICBbc3JjXT1cInBsYWNlLnVybCB8IHNhZmV0eVwiIGFsbG93ZnVsbHNjcmVlbj5cbiAgICAgICAgICAgICA8L2lmcmFtZT5cbiAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgIDxkaXYgKm5nSWY9XCJwbGFuQ2xpY2tlZFwiIGNsYXNzPVwiY29udGVuaWRvXCI+XG4gICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlQ29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJjaXR5VGl0bGVcIj57e2V2ZW50Lm5hbWV9fTwvaDM+XG4gICAgICAgICAgICAgPC9kaXY+IFxuICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tc3VjY2VzcyBidG4tbGFyZ2UgYWRkRXZlbnRcIiAoY2xpY2spPVwiZ2V0UGxhbihldmVudClcIj5cbiAgICAgICAgICAgICAgICAgIEFkZCBQbGFuXG4gICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJjdXJyZW50bHkubm9EYXlcIiBjbGFzcz1cIm5vRGF5IGFsZXJ0IGFsZXJ0LWRhbmdlciBhbGVydC1kaXNtaXNzaWJsZVwiIHJvbGU9XCJhbGVydFwiPlxuICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwiYWxlcnRcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XG4gICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPHN0cm9uZz5Xb29wcyE8L3N0cm9uZz4gUGxlYXNlIGNyZWF0ZSBvciBzZWxlY3QgYSBkYXkgZmlyc3QuXG4gICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgXHQgICA8ZGl2IGNsYXNzPVwiZGVzY3JpYmVcIj5cbiAgICAgICAgXHQgICAgIDxwPnt7ZXZlbnQuZGVzY3JpcHRpb259fTwvcD5cbiAgICAgICAgXHQgICA8L2Rpdj5cbiAgICAgICAgXHQgICA8ZGl2IGNsYXNzPVwiZm90b1wiPlxuICAgICAgICBcdCAgICAgPGltZyBzcmM9e3tldmVudC5waWN9fSB3aWR0aD1cIjQyMFwiIGhlaWdodD1cIjQyMFwiIGNsYXNzPVwiaW1nLXJlc3BvbnNpdmVcIiBhbHQ9XCJSZXNwb25zaXZlIGltYWdlXCI+XG4gICAgICAgIFx0ICAgPC9kaXY+XG4gICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVtYmVkLXJlc3BvbnNpdmUgZW1iZWQtcmVzcG9uc2l2ZS00YnkzIGV2ZW50VmlkXCI+XG4gICAgICAgICAgICAgICA8aWZyYW1lIGNsYXNzPVwiZW1iZWQtcmVzcG9uc2l2ZS1pdGVtXCIgXG4gICAgICAgICAgICAgICAgIFtzcmNdPVwiZXZlbnQudXJsIHwgc2FmZXR5XCIgYWxsb3dmdWxsc2NyZWVuPlxuICAgICAgICAgICAgICAgPC9pZnJhbWU+XG4gICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XHRcdFxuICAgICAgICA8L2Rpdj5cbiAgICAgICA8L2Rpdj5cbiAgICAgIDxhcHAtY3VycmVudC1hZ2VuZGEgI2N1cnJlbnRseT48L2FwcC1jdXJyZW50LWFnZW5kYT5cbiAgICA8L2Rpdj4gXG5cdCIsIjxhcHAtY2l0eS1kZXRhaWxzPjwvYXBwLWNpdHktZGV0YWlscz4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUNLVztRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQW9F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