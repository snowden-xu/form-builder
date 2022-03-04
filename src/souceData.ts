const sourceData = {
  success: true,
  errors: null,
  data: {
    id: '2c94bb007ba95ba2017c791aaa600a24',
    tenantId: '0702',
    appId: 'ccp',
    projectId: null,
    name: 't_collaborate_plan',
    dispName: '协同监查',
    module: 'ccp_inspect',
    status: 'active',
    userDefineId: 'collaborate',
    orderNumber: 5.5,
    category: 'SYSTEM',
    columnList: [
      {
        id: '2c94bb007ba95ba2017c791aaa8a0a26',
        tenantId: '0702',
        appId: 'ccp',
        projectId: null,
        tableId: '2c94bb007ba95ba2017c791aaa600a24',
        tableName: null,
        name: 'sponsor',
        category: 'SYSTEM',
        valueNum: 2,
        valueType: 'TEXT',
        valueFormat: null,
        dispName: '申办方',
        dispType: 'SINGLE_LINE_TEXT',
        dispOrder: 2,
        dictionaryId: '',
        hintMsg: null,
        allowRequired: 1,
        allowValueFormat: 0,
        required: 0,
        maxLength: null,
        scare: null,
        status: 'active',
        extProps: '{"messageType":"expect"}',
        allowStatus: 1,
        readOnly: 1,
        approveAble: null,
        approvePassAble: null,
        businessAble: null,
        allowBusinessAble: 1,
        allowApproveAble: 1,
        allowApprovePassAble: 1,
        enName: 'Sponsor',
        zhName: null,
        i18nValue: '申办方',
        dictionary: null,
      },
      {
        id: '2c94bb007ba95ba2017c791aaaa90a28',
        tenantId: '0702',
        appId: 'ccp',
        projectId: null,
        tableId: '2c94bb007ba95ba2017c791aaa600a24',
        tableName: null,
        name: 'siteId',
        category: 'SYSTEM',
        valueNum: 4,
        valueType: 'TEXT',
        valueFormat: null,
        dispName: '中心名称',
        dispType: 'SINGLE_SELECT',
        dispOrder: 4,
        dictionaryId: '',
        hintMsg: null,
        allowRequired: 0,
        allowValueFormat: 0,
        required: 1,
        maxLength: null,
        scare: null,
        status: 'active',
        extProps: '{"messageType":"expect"}',
        allowStatus: 0,
        readOnly: 0,
        approveAble: null,
        approvePassAble: null,
        businessAble: null,
        allowBusinessAble: 1,
        allowApproveAble: 1,
        allowApprovePassAble: 1,
        enName: 'Site Name',
        zhName: null,
        i18nValue: '中心名称',
        dictionary: {
          id: null,
          tenantId: null,
          appId: null,
          projectId: null,
          name: null,
          oid: null,
          isDefault: null,
          description: null,
          status: null,
          categoryCode: null,
          isDeleted: null,
          isEditable: null,
          isDeleteAble: 1,
          dictionaryEntries: [
            {
              id: '2c94bba87aa424e1017af0ffa44b54e2',
              tenantId: null,
              dictionaryId: null,
              keyCode: null,
              name: null,
              value: null,
              nameEn: null,
              ccpNameZh: null,
              orderNumber: null,
              isDefault: null,
              isDeleted: 0,
              isAvailable: 1,
              isForbiddenAble: null,
              extProps: null,
              parentId: null,
              isDeleteAble: 1,
              extMap: null,
              i18nValue: '株洲第四人民医院',
              itemKey: null,
              defaultI18nValue: null,
              groupKey: null,
            },
            {
              id: '2c94bba87aa424e1017af0ffbfe554f3',
              tenantId: null,
              dictionaryId: null,
              keyCode: null,
              name: null,
              value: null,
              nameEn: null,
              ccpNameZh: null,
              orderNumber: null,
              isDefault: null,
              isDeleted: 0,
              isAvailable: 1,
              isForbiddenAble: null,
              extProps: null,
              parentId: null,
              isDeleteAble: 1,
              extMap: null,
              i18nValue: '东台心脑康复医院',
              itemKey: null,
              defaultI18nValue: null,
              groupKey: null,
            },
            {
              id: '2c94bbbe7be83e43017c0cb9e77b0131',
              tenantId: null,
              dictionaryId: null,
              keyCode: null,
              name: null,
              value: null,
              nameEn: null,
              ccpNameZh: null,
              orderNumber: null,
              isDefault: null,
              isDeleted: 0,
              isAvailable: 1,
              isForbiddenAble: null,
              extProps: null,
              parentId: null,
              isDeleteAble: 1,
              extMap: null,
              i18nValue: '响水县疾病预防控制中心',
              itemKey: null,
              defaultI18nValue: null,
              groupKey: null,
            },
          ],
        },
      },
      {
        id: '2c94bb007ba95ba2017c791aaaba0a29',
        tenantId: '0702',
        appId: 'ccp',
        projectId: null,
        tableId: '2c94bb007ba95ba2017c791aaa600a24',
        tableName: null,
        name: 'principalInvestigator',
        category: 'SYSTEM',
        valueNum: 5,
        valueType: 'TEXT',
        valueFormat: null,
        dispName: '主要研究者',
        dispType: 'SINGLE_LINE_TEXT',
        dispOrder: 4.5,
        dictionaryId: '',
        hintMsg: '中心-联系人-中心人员 中身份为“主要研究者”的联系人姓名',
        allowRequired: 0,
        allowValueFormat: 0,
        required: 0,
        maxLength: null,
        scare: null,
        status: 'active',
        extProps: '{"messageType":"expect"}',
        allowStatus: 1,
        readOnly: 1,
        approveAble: null,
        approvePassAble: null,
        businessAble: null,
        allowBusinessAble: 1,
        allowApproveAble: 1,
        allowApprovePassAble: 1,
        enName: 'Principal Investigator',
        zhName: null,
        i18nValue: '主要研究者',
        dictionary: null,
      },
      {
        id: '2c94bb007ba95ba2017c791aaac80a2a',
        tenantId: '0702',
        appId: 'ccp',
        projectId: null,
        tableId: '2c94bb007ba95ba2017c791aaa600a24',
        tableName: null,
        name: 'inspectTypeId',
        category: 'SYSTEM',
        valueNum: 6,
        valueType: 'TEXT',
        valueFormat: null,
        dispName: '监查类型',
        dispType: 'SINGLE_SELECT',
        dispOrder: 5,
        dictionaryId: null,
        hintMsg: null,
        allowRequired: 1,
        allowValueFormat: 0,
        required: 0,
        maxLength: null,
        scare: null,
        status: 'active',
        extProps: '{"messageType":"expect"}',
        allowStatus: 1,
        readOnly: 0,
        approveAble: null,
        approvePassAble: null,
        businessAble: null,
        allowBusinessAble: 1,
        allowApproveAble: 1,
        allowApprovePassAble: 1,
        enName: 'Visit Type',
        zhName: null,
        i18nValue: '监查类型',
        dictionary: {
          id: null,
          tenantId: null,
          appId: null,
          projectId: null,
          name: null,
          oid: null,
          isDefault: null,
          description: null,
          status: null,
          categoryCode: null,
          isDeleted: null,
          isEditable: null,
          isDeleteAble: 1,
          dictionaryEntries: [
            {
              id: '2c948aa57aec2165017af0f961a803c6',
              tenantId: null,
              dictionaryId: null,
              keyCode: null,
              name: null,
              value: null,
              nameEn: null,
              ccpNameZh: null,
              orderNumber: null,
              isDefault: null,
              isDeleted: 0,
              isAvailable: 1,
              isForbiddenAble: null,
              extProps: null,
              parentId: null,
              isDeleteAble: 1,
              extMap: null,
              i18nValue: '中心筛选访视',
              itemKey: null,
              defaultI18nValue: null,
              groupKey: null,
            },
            {
              id: '2c948aa57aec2165017af0f961a803ca',
              tenantId: null,
              dictionaryId: null,
              keyCode: null,
              name: null,
              value: null,
              nameEn: null,
              ccpNameZh: null,
              orderNumber: null,
              isDefault: null,
              isDeleted: 0,
              isAvailable: 1,
              isForbiddenAble: null,
              extProps: null,
              parentId: null,
              isDeleteAble: 1,
              extMap: null,
              i18nValue: '常规监查访视',
              itemKey: null,
              defaultI18nValue: null,
              groupKey: null,
            },
            {
              id: '2c948aa57aec2165017af0f961a803cb',
              tenantId: null,
              dictionaryId: null,
              keyCode: null,
              name: null,
              value: null,
              nameEn: null,
              ccpNameZh: null,
              orderNumber: null,
              isDefault: null,
              isDeleted: 0,
              isAvailable: 1,
              isForbiddenAble: null,
              extProps: null,
              parentId: null,
              isDeleteAble: 1,
              extMap: null,
              i18nValue: '中心关闭访视',
              itemKey: null,
              defaultI18nValue: null,
              groupKey: null,
            },
          ],
        },
      },
      {
        id: '2c94bb007ba95ba2017c791aaad60a2b',
        tenantId: '0702',
        appId: 'ccp',
        projectId: null,
        tableId: '2c94bb007ba95ba2017c791aaa600a24',
        tableName: null,
        name: 'collaborateInspectTypeId',
        category: 'SYSTEM',
        valueNum: 7,
        valueType: 'TEXT',
        valueFormat: null,
        dispName: '协同监查类型',
        dispType: 'SINGLE_SELECT',
        dispOrder: 5.5,
        dictionaryId: null,
        hintMsg: null,
        allowRequired: 0,
        allowValueFormat: 0,
        required: 1,
        maxLength: null,
        scare: null,
        status: 'active',
        extProps: '{"messageType":"expect"}',
        allowStatus: 0,
        readOnly: 0,
        approveAble: null,
        approvePassAble: null,
        businessAble: null,
        allowBusinessAble: 1,
        allowApproveAble: 1,
        allowApprovePassAble: 1,
        enName: 'Visit Type',
        zhName: null,
        i18nValue: '协同监查类型',
        dictionary: {
          id: null,
          tenantId: null,
          appId: null,
          projectId: null,
          name: null,
          oid: null,
          isDefault: null,
          description: null,
          status: null,
          categoryCode: null,
          isDeleted: null,
          isEditable: null,
          isDeleteAble: 1,
          dictionaryEntries: [
            {
              id: 'ff8081817c83b5aa017c83b5aa020000',
              tenantId: null,
              dictionaryId: null,
              keyCode: null,
              name: null,
              value: null,
              nameEn: null,
              ccpNameZh: null,
              orderNumber: null,
              isDefault: null,
              isDeleted: 0,
              isAvailable: 1,
              isForbiddenAble: null,
              extProps: null,
              parentId: null,
              isDeleteAble: 1,
              extMap: null,
              i18nValue: '不定期',
              itemKey: null,
              defaultI18nValue: null,
              groupKey: null,
            },
          ],
        },
      },
      {
        id: '2c94bb007ba95ba2017c791aaae40a2c',
        tenantId: '0702',
        appId: 'ccp',
        projectId: null,
        tableId: '2c94bb007ba95ba2017c791aaa600a24',
        tableName: null,
        name: 'startTime',
        category: 'SYSTEM',
        valueNum: 8,
        valueType: 'DATE',
        valueFormat: 'YYYY-MM-DD',
        dispName: '计划开始日期',
        dispType: 'DATE',
        dispOrder: 6,
        dictionaryId: '',
        hintMsg: null,
        allowRequired: 0,
        allowValueFormat: 1,
        required: 1,
        maxLength: null,
        scare: null,
        status: 'active',
        extProps: '{"messageType":"expect"}',
        allowStatus: 0,
        readOnly: 0,
        approveAble: null,
        approvePassAble: null,
        businessAble: null,
        allowBusinessAble: 1,
        allowApproveAble: 1,
        allowApprovePassAble: 1,
        enName: 'Planned Start Date',
        zhName: null,
        i18nValue: '计划开始日期',
        dictionary: null,
      },
      {
        id: '2c94bb007ba95ba2017c791aaaf50a2d',
        tenantId: '0702',
        appId: 'ccp',
        projectId: null,
        tableId: '2c94bb007ba95ba2017c791aaa600a24',
        tableName: null,
        name: 'endTime',
        category: 'SYSTEM',
        valueNum: 9,
        valueType: 'DATE',
        valueFormat: 'YYYY-MM-DD',
        dispName: '计划结束日期',
        dispType: 'DATE',
        dispOrder: 7,
        dictionaryId: '',
        hintMsg: null,
        allowRequired: 0,
        allowValueFormat: 1,
        required: 1,
        maxLength: null,
        scare: null,
        status: 'active',
        extProps: '{"messageType":"expect"}',
        allowStatus: 0,
        readOnly: 0,
        approveAble: null,
        approvePassAble: null,
        businessAble: null,
        allowBusinessAble: 1,
        allowApproveAble: 1,
        allowApprovePassAble: 1,
        enName: 'Planned End Date',
        zhName: null,
        i18nValue: '计划结束日期',
        dictionary: null,
      },
      {
        id: '2c94bb007ba95ba2017c791aab050a2e',
        tenantId: '0702',
        appId: 'ccp',
        projectId: null,
        tableId: '2c94bb007ba95ba2017c791aaa600a24',
        tableName: null,
        name: 'durationHour',
        category: 'SYSTEM',
        valueNum: 10,
        valueType: 'TEXT',
        valueFormat: null,
        dispName: '预计监查时长(h)',
        dispType: 'SINGLE_LINE_NUMBER',
        dispOrder: 8,
        dictionaryId: '',
        hintMsg: null,
        allowRequired: 0,
        allowValueFormat: 0,
        required: 1,
        maxLength: 11,
        scare: 2,
        status: 'active',
        extProps: '{"messageType":"expect"}',
        allowStatus: 1,
        readOnly: 0,
        approveAble: null,
        approvePassAble: null,
        businessAble: null,
        allowBusinessAble: 1,
        allowApproveAble: 1,
        allowApprovePassAble: 1,
        enName: 'Planned Duration（h）',
        zhName: null,
        i18nValue: '预计监查时长(h)',
        dictionary: null,
      },
      {
        id: '2c94bb007ba95ba2017c791aab160a2f',
        tenantId: '0702',
        appId: 'ccp',
        projectId: null,
        tableId: '2c94bb007ba95ba2017c791aaa600a24',
        tableName: null,
        name: 'confirmContent',
        category: 'SYSTEM',
        valueNum: 11,
        valueType: 'TEXT',
        valueFormat: null,
        dispName: '计划监查内容',
        dispType: 'MULTI_SELECT',
        dispOrder: 13,
        dictionaryId: '2c94bb067af0507b017af0f8790907da',
        hintMsg: null,
        allowRequired: 1,
        allowValueFormat: 0,
        required: 0,
        maxLength: null,
        scare: null,
        status: 'active',
        extProps: '{"messageType":"expect"}',
        allowStatus: 1,
        readOnly: 0,
        approveAble: null,
        approvePassAble: null,
        businessAble: null,
        allowBusinessAble: 1,
        allowApproveAble: 1,
        allowApprovePassAble: 1,
        enName: 'Planned Monitoring Visit Content',
        zhName: null,
        i18nValue: '计划监查内容',
        dictionary: {
          id: '2c94bb067af0507b017af0f8790907da',
          tenantId: '0702',
          appId: 'ccp',
          projectId: null,
          name: '确认内容',
          oid: 'confirmation_content',
          isDefault: 1,
          description: null,
          status: 'active',
          categoryCode: 'inspect',
          isDeleted: 0,
          isEditable: 1,
          isDeleteAble: 1,
          dictionaryEntries: [
            {
              id: '2c948aa57aec2165017af0f8791000d1',
              tenantId: '0702',
              dictionaryId: '2c94bb067af0507b017af0f8790907da',
              keyCode: '0',
              name: '审核CRF、质疑和原始文件',
              value: '0',
              nameEn: 'Review of CRFs, Queries and Rriginal Documents',
              ccpNameZh: '审核CRF、质疑和原始文件',
              orderNumber: 1,
              isDefault: 1,
              isDeleted: 0,
              isAvailable: 0,
              isForbiddenAble: 1,
              extProps: null,
              parentId: null,
              isDeleteAble: 1,
              extMap: null,
              i18nValue: '审核CRF、质疑和原始文件',
              itemKey: '0',
              defaultI18nValue: '审核CRF、质疑和原始文件',
              groupKey: null,
            },
            {
              id: '2c948aa57aec2165017af0f8791c00d2',
              tenantId: '0702',
              dictionaryId: '2c94bb067af0507b017af0f8790907da',
              keyCode: '1',
              name: '审核知情同意书',
              value: '1',
              nameEn: 'Review ICF',
              ccpNameZh: '审核知情同意书',
              orderNumber: 2,
              isDefault: 1,
              isDeleted: 0,
              isAvailable: 1,
              isForbiddenAble: 1,
              extProps: null,
              parentId: null,
              isDeleteAble: 1,
              extMap: null,
              i18nValue: '审核知情同意书',
              itemKey: '1',
              defaultI18nValue: '审核知情同意书',
              groupKey: null,
            },
            {
              id: '2c948aa57aec2165017af0f8792800d3',
              tenantId: '0702',
              dictionaryId: '2c94bb067af0507b017af0f8790907da',
              keyCode: '2',
              name: '确保SAE文件恰当保存',
              value: '2',
              nameEn: 'Ensure SAE Files Saved Properly',
              ccpNameZh: '确保SAE文件恰当保存',
              orderNumber: 3,
              isDefault: 1,
              isDeleted: 0,
              isAvailable: 1,
              isForbiddenAble: 1,
              extProps: null,
              parentId: null,
              isDeleteAble: 1,
              extMap: null,
              i18nValue: '确保SAE文件恰当保存',
              itemKey: '2',
              defaultI18nValue: '确保SAE文件恰当保存',
              groupKey: null,
            },
            {
              id: '2c948aa57aec2165017af0f8793400d4',
              tenantId: '0702',
              dictionaryId: '2c94bb067af0507b017af0f8790907da',
              keyCode: '3',
              name: '确认授权表最新且准确',
              value: '3',
              nameEn: 'Confirm Authorization Form Current and Accurate',
              ccpNameZh: '确认授权表最新且准确',
              orderNumber: 4,
              isDefault: 1,
              isDeleted: 0,
              isAvailable: 1,
              isForbiddenAble: 1,
              extProps: null,
              parentId: null,
              isDeleteAble: 1,
              extMap: null,
              i18nValue: '确认授权表最新且准确',
              itemKey: '3',
              defaultI18nValue: '确认授权表最新且准确',
              groupKey: null,
            },
            {
              id: '2c948aa57aec2165017af0f8794100d5',
              tenantId: '0702',
              dictionaryId: '2c94bb067af0507b017af0f8790907da',
              keyCode: '4',
              name: '审核研究药品和物资的计数和回收',
              value: '4',
              nameEn: 'Review the Counting and Recycling of Investigational Product and Materials',
              ccpNameZh: '审核研究药品和物资的计数和回收',
              orderNumber: 5,
              isDefault: 1,
              isDeleted: 0,
              isAvailable: 1,
              isForbiddenAble: 1,
              extProps: null,
              parentId: null,
              isDeleteAble: 1,
              extMap: null,
              i18nValue: '审核研究药品和物资的计数和回收',
              itemKey: '4',
              defaultI18nValue: '审核研究药品和物资的计数和回收',
              groupKey: null,
            },
            {
              id: '2c948aa57aec2165017af0f8794c00d6',
              tenantId: '0702',
              dictionaryId: '2c94bb067af0507b017af0f8790907da',
              keyCode: '5',
              name: '审核研究者文件夹的完整性，并回收文件',
              value: '5',
              nameEn: 'Review the Completeness of the Investigational Site File and recover the file',
              ccpNameZh: '审核研究者文件夹的完整性，并回收文件',
              orderNumber: 6,
              isDefault: 1,
              isDeleted: 0,
              isAvailable: 1,
              isForbiddenAble: 1,
              extProps: null,
              parentId: null,
              isDeleteAble: 1,
              extMap: null,
              i18nValue: '审核研究者文件夹的完整性，并回收文件',
              itemKey: '5',
              defaultI18nValue: '审核研究者文件夹的完整性，并回收文件',
              groupKey: null,
            },
            {
              id: '2c948aa57aec2165017af0f8795a00d7',
              tenantId: '0702',
              dictionaryId: '2c94bb067af0507b017af0f8790907da',
              keyCode: '6',
              name: '讨论研究进展',
              value: '6',
              nameEn: 'Discussion of Research Progress',
              ccpNameZh: '讨论研究进展',
              orderNumber: 7,
              isDefault: 1,
              isDeleted: 0,
              isAvailable: 1,
              isForbiddenAble: 1,
              extProps: null,
              parentId: null,
              isDeleteAble: 1,
              extMap: null,
              i18nValue: '讨论研究进展',
              itemKey: '6',
              defaultI18nValue: '讨论研究进展',
              groupKey: null,
            },
            {
              id: '2c948aa57aec2165017af0f8796700d8',
              tenantId: '0702',
              dictionaryId: '2c94bb067af0507b017af0f8790907da',
              keyCode: '7',
              name: '通知研究者主要问题及采取措施',
              value: '7',
              nameEn: 'Notify Investigator of Major Issues and Measures',
              ccpNameZh: '通知研究者主要问题及采取措施',
              orderNumber: 8,
              isDefault: 1,
              isDeleted: 0,
              isAvailable: 1,
              isForbiddenAble: 1,
              extProps: null,
              parentId: null,
              isDeleteAble: 1,
              extMap: null,
              i18nValue: '通知研究者主要问题及采取措施',
              itemKey: '7',
              defaultI18nValue: '通知研究者主要问题及采取措施',
              groupKey: null,
            },
            {
              id: '2c948aa57aec2165017af0f8797500d9',
              tenantId: '0702',
              dictionaryId: '2c94bb067af0507b017af0f8790907da',
              keyCode: '8',
              name: '进行培训',
              value: '8',
              nameEn: 'Trainning',
              ccpNameZh: '进行培训',
              orderNumber: 9,
              isDefault: 1,
              isDeleted: 0,
              isAvailable: 0,
              isForbiddenAble: 1,
              extProps: null,
              parentId: null,
              isDeleteAble: 1,
              extMap: null,
              i18nValue: '进行培训',
              itemKey: '8',
              defaultI18nValue: '进行培训',
              groupKey: null,
            },
            {
              id: '2c948aa57aec2165017af0f8798300da',
              tenantId: '0702',
              dictionaryId: '2c94bb067af0507b017af0f8790907da',
              keyCode: '9',
              name: '核对SAE',
              value: '9',
              nameEn: 'Check SAE',
              ccpNameZh: '核对SAE',
              orderNumber: 10,
              isDefault: 1,
              isDeleted: 0,
              isAvailable: 0,
              isForbiddenAble: 1,
              extProps: null,
              parentId: null,
              isDeleteAble: 1,
              extMap: null,
              i18nValue: '核对SAE',
              itemKey: '9',
              defaultI18nValue: '核对SAE',
              groupKey: null,
            },
          ],
        },
      },
      {
        id: '2c94bb007ba95ba2017c791aab270a30',
        tenantId: '0702',
        appId: 'ccp',
        projectId: null,
        tableId: '2c94bb007ba95ba2017c791aaa600a24',
        tableName: null,
        name: 'planOtherContent',
        category: 'SYSTEM',
        valueNum: 12,
        valueType: 'TEXT',
        valueFormat: null,
        dispName: '其他监查内容',
        dispType: 'MULTI_LINE_TEXT',
        dispOrder: 14,
        dictionaryId: '',
        hintMsg: null,
        allowRequired: 1,
        allowValueFormat: 0,
        required: 0,
        maxLength: null,
        scare: null,
        status: 'active',
        extProps: '{"messageType":"expect"}',
        allowStatus: 1,
        readOnly: 0,
        approveAble: null,
        approvePassAble: null,
        businessAble: null,
        allowBusinessAble: 1,
        allowApproveAble: 1,
        allowApprovePassAble: 1,
        enName: 'Other Content',
        zhName: null,
        i18nValue: '其他监查内容',
        dictionary: null,
      },
      {
        id: '2c94bb007ba95ba2017c791aab370a31',
        tenantId: '0702',
        appId: 'ccp',
        projectId: null,
        tableId: '2c94bb007ba95ba2017c791aaa600a24',
        tableName: null,
        name: 'inspectUser',
        category: 'SYSTEM',
        valueNum: 13,
        valueType: 'TEXT',
        valueFormat: null,
        dispName: '监查员',
        dispType: 'MULTI_SELECT',
        dispOrder: 15,
        dictionaryId: '',
        hintMsg: null,
        allowRequired: 1,
        allowValueFormat: 0,
        required: 0,
        maxLength: null,
        scare: null,
        status: 'active',
        extProps: '{"messageType":"expect"}',
        allowStatus: 1,
        readOnly: 0,
        approveAble: null,
        approvePassAble: null,
        businessAble: null,
        allowBusinessAble: 1,
        allowApproveAble: 1,
        allowApprovePassAble: 1,
        enName: 'CRA',
        zhName: null,
        i18nValue: '监查员',
        dictionary: null,
      },
      {
        id: '2c94bb007ba95ba2017c791aab4a0a32',
        tenantId: '0702',
        appId: 'ccp',
        projectId: null,
        tableId: '2c94bb007ba95ba2017c791aaa600a24',
        tableName: null,
        name: 'projectUsers',
        category: 'SYSTEM',
        valueNum: 14,
        valueType: 'TEXT',
        valueFormat: null,
        dispName: '协同监查人员',
        dispType: 'MULTI_SELECT',
        dispOrder: 16,
        dictionaryId: '',
        hintMsg: null,
        allowRequired: 1,
        allowValueFormat: 0,
        required: 0,
        maxLength: null,
        scare: null,
        status: 'active',
        extProps: '{"messageType":"expect"}',
        allowStatus: 1,
        readOnly: 0,
        approveAble: null,
        approvePassAble: null,
        businessAble: null,
        allowBusinessAble: 1,
        allowApproveAble: 1,
        allowApprovePassAble: 1,
        enName: 'Project Participants',
        zhName: null,
        i18nValue: '协同监查人员',
        dictionary: {
          id: null,
          tenantId: null,
          appId: null,
          projectId: null,
          name: null,
          oid: null,
          isDefault: null,
          description: null,
          status: null,
          categoryCode: null,
          isDeleted: null,
          isEditable: null,
          isDeleteAble: 1,
          dictionaryEntries: [
            {
              id: '2c94bb067c5f76e5017cbfbc41d505a7',
              tenantId: null,
              dictionaryId: null,
              keyCode: null,
              name: null,
              value: null,
              nameEn: null,
              ccpNameZh: null,
              orderNumber: null,
              isDefault: null,
              isDeleted: 0,
              isAvailable: 1,
              isForbiddenAble: null,
              extProps: null,
              parentId: null,
              isDeleteAble: 1,
              extMap: null,
              i18nValue: '吕慧茹',
              itemKey: null,
              defaultI18nValue: null,
              groupKey: null,
            },
            {
              id: '2c94bb2f7dc0f074017de6c86ca14f10',
              tenantId: null,
              dictionaryId: null,
              keyCode: null,
              name: null,
              value: null,
              nameEn: null,
              ccpNameZh: null,
              orderNumber: null,
              isDefault: null,
              isDeleted: 0,
              isAvailable: 1,
              isForbiddenAble: null,
              extProps: null,
              parentId: null,
              isDeleteAble: 1,
              extMap: null,
              i18nValue: 'golden',
              itemKey: null,
              defaultI18nValue: null,
              groupKey: null,
            },
            {
              id: '2c94bba87aa424e1017af10c85b956db',
              tenantId: null,
              dictionaryId: null,
              keyCode: null,
              name: null,
              value: null,
              nameEn: null,
              ccpNameZh: null,
              orderNumber: null,
              isDefault: null,
              isDeleted: 0,
              isAvailable: 1,
              isForbiddenAble: null,
              extProps: null,
              parentId: null,
              isDeleteAble: 1,
              extMap: null,
              i18nValue: '黄加平',
              itemKey: null,
              defaultI18nValue: null,
              groupKey: null,
            },
          ],
        },
      },
      {
        id: '2c94bb007ba95ba2017c791aab5c0a33',
        tenantId: '0702',
        appId: 'ccp',
        projectId: null,
        tableId: '2c94bb007ba95ba2017c791aaa600a24',
        tableName: null,
        name: 'siteUsers',
        category: 'SYSTEM',
        valueNum: 15,
        valueType: 'TEXT',
        valueFormat: null,
        dispName: '中心参与人员',
        dispType: 'MULTI_SELECT',
        dispOrder: 17,
        dictionaryId: '',
        hintMsg: null,
        allowRequired: 1,
        allowValueFormat: 0,
        required: 0,
        maxLength: null,
        scare: null,
        status: 'active',
        extProps: '{"messageType":"expect"}',
        allowStatus: 1,
        readOnly: 0,
        approveAble: null,
        approvePassAble: null,
        businessAble: null,
        allowBusinessAble: 1,
        allowApproveAble: 1,
        allowApprovePassAble: 1,
        enName: 'Site Participants',
        zhName: null,
        i18nValue: '中心参与人员',
        dictionary: null,
      },
      {
        id: '2c949cbc7ca27dac017d2e3cf842009b',
        tenantId: '0702',
        appId: 'ccp',
        projectId: null,
        tableId: '2c94bb007ba95ba2017c791aaa600a24',
        tableName: null,
        name: 'aaa',
        category: 'USERDEFINE',
        valueNum: 38,
        valueType: 'TEXT',
        valueFormat: null,
        dispName: 'dfadsffdsadf',
        dispType: 'SINGLE_SELECT',
        dispOrder: 50,
        dictionaryId: '2c94bb067af0507b017af0f887ea0830',
        hintMsg: null,
        allowRequired: 1,
        allowValueFormat: 1,
        required: 1,
        maxLength: null,
        scare: null,
        status: 'active',
        extProps: '{"messageType":"expect"}',
        allowStatus: 1,
        readOnly: 0,
        approveAble: null,
        approvePassAble: null,
        businessAble: null,
        allowBusinessAble: 1,
        allowApproveAble: 1,
        allowApprovePassAble: 1,
        enName: null,
        zhName: null,
        i18nValue: 'dfadsffdsadf',
        dictionary: {
          id: '2c94bb067af0507b017af0f887ea0830',
          tenantId: '0702',
          appId: 'ccp',
          projectId: null,
          name: '受试者是否可以继续参加研究',
          oid: 'ccp_pd_subject_continue',
          isDefault: 1,
          description: null,
          status: 'active',
          categoryCode: 'inspect',
          isDeleted: 0,
          isEditable: 1,
          isDeleteAble: 1,
          dictionaryEntries: [
            {
              id: '2c948aa57aec2165017af0f887f201b9',
              tenantId: '0702',
              dictionaryId: '2c94bb067af0507b017af0f887ea0830',
              keyCode: 'yes',
              name: '是',
              value: 'yes',
              nameEn: 'Yes',
              ccpNameZh: '是',
              orderNumber: 1,
              isDefault: 1,
              isDeleted: 0,
              isAvailable: 1,
              isForbiddenAble: 1,
              extProps: null,
              parentId: null,
              isDeleteAble: 1,
              extMap: null,
              i18nValue: '是',
              itemKey: 'yes',
              defaultI18nValue: '是',
              groupKey: null,
            },
            {
              id: '2c948aa57aec2165017af0f8882f01ba',
              tenantId: '0702',
              dictionaryId: '2c94bb067af0507b017af0f887ea0830',
              keyCode: 'no',
              name: '否',
              value: 'no',
              nameEn: 'No',
              ccpNameZh: '否',
              orderNumber: 2,
              isDefault: 1,
              isDeleted: 0,
              isAvailable: 1,
              isForbiddenAble: 1,
              extProps: null,
              parentId: null,
              isDeleteAble: 1,
              extMap: null,
              i18nValue: '否',
              itemKey: 'no',
              defaultI18nValue: '否',
              groupKey: null,
            },
          ],
        },
      },
      {
        id: '2c94bbfb7deb0850017e3340aac22a28',
        tenantId: '0702',
        appId: 'ccp',
        projectId: null,
        tableId: '2c94bb007ba95ba2017c791aaa600a24',
        tableName: null,
        name: 'cszd',
        category: 'USERDEFINE',
        valueNum: 39,
        valueType: 'TEXT',
        valueFormat: null,
        dispName: '测试字段',
        dispType: 'SINGLE_LINE_TEXT',
        dispOrder: 51,
        dictionaryId: null,
        hintMsg: null,
        allowRequired: 1,
        allowValueFormat: 1,
        required: 0,
        maxLength: null,
        scare: null,
        status: 'active',
        extProps: '{"messageType":"expect"}',
        allowStatus: 1,
        readOnly: 0,
        approveAble: null,
        approvePassAble: null,
        businessAble: null,
        allowBusinessAble: 1,
        allowApproveAble: 1,
        allowApprovePassAble: 1,
        enName: null,
        zhName: null,
        i18nValue: '测试字段',
        dictionary: null,
      },
    ],
    formTypeCode: null,
  },
};

export default sourceData;
